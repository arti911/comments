<template>
  <div id="app">
    <a-comment>
      <a-avatar
        slot="avatar"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
      <div slot="content">
        <a-form-item>
          <a-textarea :rows="4" :value="value" @change="handleChange" />
        </a-form-item>
        <a-form-item>
          <a-button
            html-type="submit"
            :loading="submitting"
            type="primary"
            @click="handleSubmit"
          >
            Add Comment
          </a-button>
        </a-form-item>
      </div>
    </a-comment>
    <a-spin v-if="loading" class="spinner" />
    <List
      :comments="comments"
      :loading:="loading"
      :loadingMore="loadingMore"
      :showLoadingMore="showLoadingMore"
      @like="like"
      @dislike="dislike"
      @reply="reply"
      @spoiler="spoiler"
      @handleReplyChange="handleReplyChange"
      @handleReplySubmit="handleReplySubmit"
      @onLoadMore="onLoadMore"
      v-else
    />
  </div>
</template>

<script>
import List from "./components/List";
import moment from "moment";

export default {
  name: "App",
  components: {
    List
  },
  mounted() {
    this.getComments().then(result => {
      this.setComments(result);
      this.loading = false;
      this.showLoadingMore = this.comments.length < result.length;
    });
  },
  data() {
    return {
      comments: [],
      submitting: false,
      value: "",
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      moment
    };
  },
  methods: {
    onLoadMore() {
      this.loadingMore = true;
      this.getComments().then(result => {
        this.setComments(result);
        this.loadingMore = false;

        this.showLoadingMore = this.comments.length < result.length;
      });
    },
    setComments(arr) {
      this.comments = this.comments.concat(
        arr.slice(this.comments.length, this.comments.length + 12)
      );
    },
    getComments: async () => {
      const url = "https://jsonplaceholder.typicode.com";
      const comments = await fetch(`${url}/comments`);

      if (comments.ok) {
        const result = await comments.json();

        const res = result.map((item, index) => {
          if (index % 2 === 0) {
            item = {
              avatar:
                "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
              datetime: moment().fromNow(),
              likes: 0,
              dislikes: 0,
              action: null,
              reply: false,
              comments: [],
              replyValue: "",
              replySubmitting: false,
              spoiler: true,
              ...item
            };
          } else {
            item = {
              avatar:
                "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
              datetime: moment().fromNow(),
              likes: 0,
              dislikes: 0,
              action: null,
              reply: false,
              comments: [],
              replyValue: "",
              replySubmitting: false,
              spoiler: false,
              ...item
            };
          }

          return item;
        });

        return res;
      }
    },
    like(el) {
      el.likes = 1;
      el.dislikes = 0;
      el.action = "liked";
    },
    dislike(el) {
      el.likes = 0;
      el.dislikes = 1;
      el.action = "disliked";
    },
    reply(el) {
      if (el.reply) {
        el.reply = false;
        el.replyValue = "";
      } else {
        el.reply = true;
      }
    },
    spoiler(el) {
      if (el.spoiler) {
        el.spoiler = false;
      } else {
        el.spoiler = true;
      }
      // el.spoiler = !el.spoiler;
    },
    handleSubmit() {
      if (!this.value) {
        return;
      }

      this.submitting = true;

      setTimeout(() => {
        this.submitting = false;
        this.comments = [
          {
            email: "Han Solo",
            avatar:
              "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            body: this.value,
            datetime: moment().fromNow(),
            likes: 0,
            dislikes: 0,
            action: null,
            reply: false,
            comments: [],
            replyValue: "",
            replySubmitting: false,
            spoiler: false
          },
          ...this.comments
        ];
        this.value = "";
      }, 1000);
    },
    handleChange(e) {
      this.value = e.target.value;
    },
    handleReplySubmit(el) {
      if (!el.replyValue) {
        return;
      }

      el.replySubmitting = true;

      setTimeout(() => {
        el.replySubmitting = false;
        el.comments = [
          {
            email: "Han Solo",
            avatar:
              "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            body: el.replyValue,
            datetime: moment().fromNow(),
            likes: 0,
            dislikes: 0,
            action: null,
            reply: false,
            comments: [],
            replyValue: "",
            replySubmitting: false,
            spoiler: false
          },
          ...el.comments
        ];
        el.replyValue = "";
        el.reply = false;
      }, 1000);
    },
    handleReplyChange(e, el) {
      el.replyValue = e.target.value;
    }
  }
};
</script>

<style lang="scss">
.ant-comment.blur
  > .ant-comment-inner
  > .ant-comment-content
  > .ant-comment-content-detail {
  color: transparent;
  text-shadow: 0 0 8px black;
}

.ant-comment {
  width: 100%;
}
.ant-comment-content-detail {
  text-align: left;
}
.ant-comment-actions {
  text-align: left;
}
.ant-spin-spinning.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
