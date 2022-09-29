<script setup>
  import BaseLayout from '../week7/task4slot.vue'
  </script>
  
  <template>
    <BaseLayout>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>
  
      <template #default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>
  
      <template #footer>
        <p>Here's some contact info</p>
      </template>
    </BaseLayout>
  </template>