<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Chart from 'chart.js/auto'

const chart1 = ref<HTMLCanvasElement | null>(null)
const chart2 = ref<HTMLCanvasElement | null>(null)
const chart3 = ref<HTMLCanvasElement | null>(null)
const chart4 = ref<HTMLCanvasElement | null>(null)
const chart5 = ref<HTMLCanvasElement | null>(null)
const chart6 = ref<HTMLCanvasElement | null>(null)

let lastScrollPos = 0
const headerHeight = 120 // Высота хедера в пикселях

onMounted(() => {
  // Chart 1: Bar Chart
  if (chart1.value) {
    new Chart(chart1.value, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Quantity',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    })
  }

  // Chart 2: Line Chart
  if (chart2.value) {
    new Chart(chart2.value, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Values',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    })
  }

  // Chart 3: Doughnut Chart
  if (chart3.value) {
    new Chart(chart3.value, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          label: 'Share',
          data: [300, 50, 100],
          backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
          hoverOffset: 4,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    })
  }

  // Chart 4: Radar Chart
  if (chart4.value) {
    new Chart(chart4.value, {
      type: 'radar',
      data: {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)',
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    })
  }

  // Chart 5: Pie Chart
  if (chart5.value) {
    new Chart(chart5.value, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          label: 'Pie Chart',
          data: [10, 20, 30],
          backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
          hoverOffset: 4,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    })
  }

  // Chart 6: Polar Area Chart
  if (chart6.value) {
    new Chart(chart6.value, {
      type: 'polarArea',
      data: {
        labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
        datasets: [{
          label: 'Polar Area',
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(201, 203, 207, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    })
  }

  // Обработчик скролла для скрытия адресной строки
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset

    if (currentScrollPos > lastScrollPos && currentScrollPos > headerHeight) {
      // Скролл вниз - скрываем адресную строку
      document.body.style.paddingTop = '0'
      window.scrollTo({ top: currentScrollPos + headerHeight, behavior: 'auto' })
    } else if (currentScrollPos < lastScrollPos) {
      // Скролл вверх - показываем адресную строку
      document.body.style.paddingTop = `${headerHeight}px`
    }

    lastScrollPos = currentScrollPos
  }

  window.addEventListener('scroll', handleScroll)

  // Очистка обработчика при размонтировании
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<template>
  <div class="big-widgets">
    <div class="chart-container"><canvas ref="chart1"></canvas></div>
    <div class="chart-container"><canvas ref="chart2"></canvas></div>
    <div class="chart-container"><canvas ref="chart3"></canvas></div>
    <div class="chart-container"><canvas ref="chart4"></canvas></div>
    <div class="chart-container"><canvas ref="chart5"></canvas></div>
    <div class="chart-container"><canvas ref="chart6"></canvas></div>
  </div>
</template>

<style scoped>
.big-widgets {
  max-height: calc(100vh - 131px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
  padding: 16px 16px env(safe-area-inset-bottom) 16px;
  transition: padding-top 0.3s ease; /* Плавный переход */
}

.chart-container {
  position: relative;
  height: 300px;
  margin-bottom: 16px;
  background: #f5f5f5;
  border: 1px solid #ccc;
}

.chart-container:last-child {
  margin-bottom: 0;
}

/* Для мобильных устройств с поддержкой svh */
@supports (height: 100svh) {
  .big-widgets {
    max-height: calc(100svh - 131px);
  }
}
</style>