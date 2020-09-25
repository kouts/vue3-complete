<template>
  <div class="card">
    <div class="card-header">
      <slot name="title" />
    </div>
    <div class="card-body">
      <slot name="content" />
    </div>
    <div class="card-footer">
      <slot name="description" />
    </div>
  </div>
</template>
