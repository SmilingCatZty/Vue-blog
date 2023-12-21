<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  size: {
    type: Number,
    default: 12
  },
  type: {
    type: String as () => 'dashed' | 'solid',
    default: 'solid'
  },
  color: {
    type: String,
    default: '#000'
  },
  background: {
    type: String,
    default: '#ccc'
  },
  editable: {
    type: Boolean,
    default: false
  },
  border: {
    type: String,
    default: '#000'
  }
})

const emit = defineEmits<{
  tagControl: [{ label: string; status: boolean }] // 具名元组语法
}>()

const isActive = ref<boolean>(false)

const clickTag = () => {
  if (props.editable) {
    isActive.value = !isActive.value
    emit('tagControl', { label: props.label, status: isActive.value })
  }
}
</script>

<template>
  <span
    class="tag"
    :style="
      editable
        ? isActive
          ? { fontSize: `${props.size}px`, border: `0.1rem ${props.type} ${props.border}`, color: `${props.color}` }
          : { fontSize: `${props.size}px`, border: `0.1rem ${props.type} #ccc`, color: `#ccc` }
        : { fontSize: `${props.size}px`, border: `0.1rem ${props.type} ${props.background}`, color: `${props.color}` }
    "
    @click="clickTag()"
  >
    {{ props.label }}
  </span>
</template>

<style lang="scss" scoped>
.tag {
  padding: 0 0.2rem;
  border-radius: 10px;
}
</style>
