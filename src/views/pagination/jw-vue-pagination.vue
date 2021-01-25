<template>
  <ul
    v-if="pager.pages && pager.pages.length"
    class="pagination"
    :style="ulStyles"
  >
    <li
      class="page-item first"
      :class="{ disabled: pager.currentPage === 1 }"
      :style="liStyles"
    >
      <a class="page-link" @click="setPage(1)" :style="aStyles">{{
        labels.first
      }}</a>
    </li>
    <li
      class="page-item previous"
      :class="{ disabled: pager.currentPage === 1 }"
      :style="liStyles"
    >
      <a
        class="page-link"
        @click="setPage(pager.currentPage - 1)"
        :style="aStyles"
        >{{ labels.previous }}</a
      >
    </li>
    <li
      v-for="page in pager.pages"
      :key="page"
      class="page-item page-number"
      :class="{ active: pager.currentPage === page }"
      :style="liStyles"
    >
      <a class="page-link" @click="setPage(page)" :style="aStyles">{{
        page
      }}</a>
    </li>
    <li
      class="page-item next"
      :class="{ disabled: pager.currentPage === pager.totalPages }"
      :style="liStyles"
    >
      <a
        class="page-link"
        @click="setPage(pager.currentPage + 1)"
        :style="aStyles"
        >{{ labels.next }}</a
      >
    </li>
    <li
      class="page-item last"
      :class="{ disabled: pager.currentPage === pager.totalPages }"
      :style="liStyles"
    >
      <a
        class="page-link"
        @click="setPage(pager.totalPages)"
        :style="aStyles"
        >{{ labels.last }}</a
      >
    </li>
  </ul>

  <ul class="step my-2">
    <li class="step-item">
      <a
        class="text-light bg-dark tooltip"
        data-tooltip="10"
        @click.prevent="pageSizezChanged(10)"
      >
        show 10 rows/page
      </a>
    </li>
    <li class="step-item">
      <a
        class="text-light tooltip"
        data-tooltip="25"
        @click.prevent="pageSizezChanged(25)"
        >show 25 rows/page</a
      >
    </li>
    <li class="step-item">
      <a
        class="text-light tooltip"
        data-tooltip="50"
        @click.prevent="pageSizezChanged(50)"
        >show 50 rows/page</a
      >
    </li>
    <li class="step-item">
      <a
        class="text-light tooltip"
        data-tooltip="100"
        @click.prevent="pageSizezChanged(100)"
        >show 100 rows/page</a
      >
    </li>
  </ul>
</template>

<script>
import paginate from "./paginate.js";

const defaultLabels = {
  first: "First",
  last: "Last",
  previous: "Previous",
  next: "Next",
};
const defaultStyles = {
  ul: {
    margin: 0,
    padding: 0,
    display: "inline-block",
  },
  li: {
    color: "white",
    listStyle: "none",
    display: "inline",
    textAlign: "center",
  },
  a: {
    color: "white",
    cursor: "pointer",
    padding: "6px 12px",
    display: "inline",
    float: "left",
  },
};
export default {
  emits: ["changePage"],
  props: {
    items: {
      type: Array,
      required: true,
    },
    initialPage: {
      type: Number,
      default: 1,
    },
    maxPages: {
      type: Number,
      default: 10,
    },
    labels: {
      type: Object,
      default: () => defaultLabels,
    },
    styles: {
      type: Object,
    },
    disableDefaultStyles: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      pager: {},
      ulStyles: {},
      liStyles: {},
      aStyles: {},
      pageSize: 10,
    };
  },
  created() {
    // set default styles unless disabled
    if (!this.disableDefaultStyles) {
      this.ulStyles = defaultStyles.ul;
      this.liStyles = defaultStyles.li;
      this.aStyles = defaultStyles.a;
    }
    // merge custom styles with default styles
    if (this.styles) {
      this.ulStyles = { ...this.ulStyles, ...this.styles.ul };
      this.liStyles = { ...this.liStyles, ...this.styles.li };
      this.aStyles = { ...this.aStyles, ...this.styles.a };
    }
    // set to initial page
    this.setPage(this.initialPage);
  },
  methods: {
    pageSizezChanged(changedPageSize) {
      this.pageSize = changedPageSize;
      this.setPage(this.initialPage);
    },
    setPage(page) {
      const { items, pageSize, maxPages } = this;
      // get new pager object for specified page
      const pager = paginate(items.length, page, pageSize, maxPages);
      // get new page of items from items array
      const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
      // update pager
      this.pager = pager;
      // emit change page event to parent component
      this.$emit("changePage", pageOfItems);
    },
  },
  watch: {
    items() {
      this.setPage(this.initialPage);
    },
  },
};
</script>

