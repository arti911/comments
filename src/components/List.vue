<template>
  <a-list
    v-if="comments.length"
    :loading="loading"
    :data-source="comments"
    item-layout="horizontal"
  >
    <div
      v-if="showLoadingMore"
      slot="loadMore"
      :style="{
        textAlign: 'center',
        marginTop: '12px',
        height: '32px',
        lineHeight: '32px'
      }"
    >
      <a-spin v-if="loadingMore" />
      <a-button v-else @click="onLoadMore">
        loading more
      </a-button>
    </div>
    <a-list-item slot="renderItem" slot-scope="item">
      <a-comment
        :author="item.email"
        :avatar="item.avatar"
        :content="item.body"
        :datetime="item.datetime"
        :class="item.spoiler ? 'blur' : ''"
      >
        <template slot="actions">
          <span key="comment-basic-like">
            <a-tooltip title="Like">
              <a-icon
                type="like"
                :theme="item.action === 'liked' ? 'filled' : 'outlined'"
                @click="like(item)"
              />
            </a-tooltip>
            <span style="padding-left: '8px';cursor: 'auto'">
              {{ item.likes }}
            </span>
          </span>
          <span key="comment-basic-dislike">
            <a-tooltip title="Dislike">
              <a-icon
                type="dislike"
                :theme="item.action === 'disliked' ? 'filled' : 'outlined'"
                @click="dislike(item)"
              />
            </a-tooltip>
            <span style="padding-left: '8px';cursor: 'auto'">
              {{ item.dislikes }}
            </span>
          </span>
          <span key="comment-basic-reply-to" @click="reply(item)"
            >Reply to</span
          >
          <span key="comment-basic-complain" @click="info(item)">
            Complain
          </span>
          <span
            key="comment-basic-eye"
            v-if="item.spoiler"
            @click="spoiler(item)"
          >
            <a-icon type="eye-invisible" />
          </span>
          <span v-else @click="spoiler(item)">
            <a-icon type="eye" />
          </span>
        </template>
        <a-collapse
          :bordered="false"
          v-model="activeKey"
          v-if="item.comments.length"
        >
          <a-collapse-panel
            key="1"
            :header="
              activeKey.length
                ? 'hide comments ' + item.comments.length
                : 'more comments ' + item.comments.length
            "
          >
            <List
              :comments="item.comments"
              @like="like"
              @dislike="dislike"
              @reply="reply"
              @spoiler="spoiler"
              @handleReplyChange="handleReplyChange"
              @handleReplySubmit="handleReplySubmit"
            />
          </a-collapse-panel>
        </a-collapse>
        <a-comment v-if="item.reply">
          <a-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
          <div slot="content">
            <a-form-item>
              <a-textarea
                :rows="4"
                :value="item.replyValue"
                @change="e => handleReplyChange(e, item)"
              />
            </a-form-item>
            <a-form-item>
              <a-button
                html-type="submit"
                type="primary"
                :loading="item.replySubmitting"
                @click="handleReplySubmit(item)"
              >
                Add Comment
              </a-button>
            </a-form-item>
          </div>
        </a-comment>
      </a-comment>
    </a-list-item>
  </a-list>
</template>

<script>
export default {
  name: "List",
  props: ["comments", "loading", "loadingMore", "showLoadingMore"],
  data() {
    return {
      activeKey: []
    };
  },
  methods: {
    like(el) {
      this.$emit("like", el);
    },
    dislike(el) {
      this.$emit("dislike", el);
    },
    reply(el) {
      this.$emit("reply", el);
    },
    spoiler(el) {
      this.$emit("spoiler", el);
    },
    handleReplyChange(event, el) {
      this.$emit("handleReplyChange", event, el);
    },
    handleReplySubmit(el) {
      this.$emit("handleReplySubmit", el);
    },
    onLoadMore() {
      this.$emit("onLoadMore");
    },
    info(el) {
      this.$message.info(
        `We are already processing your comment complaint ${el.email}`
      );
    }
  }
};
</script>
