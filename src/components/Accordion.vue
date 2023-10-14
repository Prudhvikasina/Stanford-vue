<template>
  <div>
    <div class="accordion-item" v-for="(item, index) in accordionItems" :key="index">
      <div class="accordion-header" @click="toggleAccordion(index)">
        <i class="icon" :class="{'fas fa-plus': !item.open, 'fas fa-minus': item.open}"></i>
        {{ item.title }}
      </div>
      <div class="accordion-content" :class="{ 'active': item.open }">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        accordionItems: [
          { title: 'Section 1', content: 'Content of Section 1', open: false },
          { title: 'Section 2', content: 'Content of Section 2', open: false },
          // Add more sections as needed
        ],
      };
    },
    methods: {
      toggleAccordion(index) {
        this.accordionItems[index].open = !this.accordionItems[index].open;
      },
    },
  };
  </script>
  
  <style scoped>
    .accordion-item {
      border: 1px solid #ccc;
      margin: 5px;
    }
    
    .accordion-header {
      background-color: #f0f0f0;
      padding: 10px;
      cursor: pointer;
    }
    
    .accordion-content {
      display: none;
      padding: 10px;
    }
    
    .accordion-content.active {
      display: block;
    }
    .icon {
  font-size: 20px;
  margin-right: 10px;
  color: #333;
}

/* Add styling for the plus and minus icons here */
.fa-plus::before {
  content: '\f067'; /* Unicode for the plus icon */
}

.fa-minus::before {
  content: '\f068'; /* Unicode for the minus icon */
}
    </style>
    