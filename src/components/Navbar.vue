<template>
  <!-- Overall Div -->
  <nav
    class="grid grid-cols-2 md:grid-cols-3 justify-center place-items-center shadow-sm"
  >
    <!-- Icon Div -->
    <div class="justify-self-start ml-24">
      <router-link :to="{ name: 'Home' }">
        <div class="flex space-x-3">
          <img src="../assets/logo.png" alt="" width="" class="" />
          <p class="font-medium text-2xl">OASIP</p>
        </div>
      </router-link>
    </div>

    <!-- Main Div -->
    <div
      class="hidden md:flex space-x-1 md:space-x-3 lg:space-x-8 text-xs font-light justify-start place-items-center"
    >
      <!-- Dashboard -->
      <div
        :class="[
          'grid place-items-center l-color-navi h-24 w-24',
          $route.name == 'Home'
            ? 'text-blue-400 border-b-2 border-blue-600'
            : '',
        ]"
      >
        <router-link
          class="hover:text-blue-400 ease-out duration-150"
          :to="{ name: 'Home' }"
        >
          Dashboard
        </router-link>
      </div>

      <!-- Schedule -->
      <div
        :class="[
          'grid place-items-center l-color-navi h-24 w-24',
          $route.name == 'Schedule'
            ? 'text-blue-400 border-b-2 border-blue-600'
            : '',
        ]"
      >
        <router-link
          :to="{ name: 'Schedule' }"
          class="hover:text-blue-400 ease-out duration-150"
        >
          Schedule
        </router-link>
      </div>
    </div>

    <!-- Booking and Manage Div -->
    <div class="hidden md:grid grid-cols-2 gap-x-5 justify-self-end">
      <!-- Booking` -->
      <router-link
        :to="{ name: 'Booking' }"
        class="flex place-items-center justify-self-end"
      >
        <button
          class="w-20 lg:w-28 h-10 bg-white font-light grid place-items-center border border-green-600 text-green-600 hover:bg-gradient-to-tl to-emerald-400 from-lime-500 hover:border-none hover:text-white hover:border-2 duration-150"
        >
          <p class="text-base md:text-xs">Book now</p>
        </button>
      </router-link>

      <!-- Management -->
      <router-link :to="{ name: 'Manage' }" class="flex place-items-center">
        <button
          class="flex gap-x-1 w-28 h-10 text-sm font-light place-items-center text-blue-600 duration-150 hover:text-blue-300"
        >
          <!-- Hamburger Icon -->
          <svg width="1em" height="1em" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m9.25 22l-.4-3.2q-.325-.125-.612-.3q-.288-.175-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375q.3-.175.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3q.287.175.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.337v.675q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375q-.3.175-.6.3l-.4 3.2Zm2.8-6.5q1.45 0 2.475-1.025Q15.55 13.45 15.55 12q0-1.45-1.025-2.475Q13.5 8.5 12.05 8.5q-1.475 0-2.488 1.025Q8.55 10.55 8.55 12q0 1.45 1.012 2.475Q10.575 15.5 12.05 15.5Zm0-2q-.625 0-1.062-.438q-.438-.437-.438-1.062t.438-1.062q.437-.438 1.062-.438t1.063.438q.437.437.437 1.062t-.437 1.062q-.438.438-1.063.438ZM12 12Zm-1 8h1.975l.35-2.65q.775-.2 1.438-.588q.662-.387 1.212-.937l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.738q.05-.387.05-.787t-.05-.788q-.05-.387-.175-.737l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.963q-.663-.387-1.438-.587L13 4h-1.975l-.35 2.65q-.775.2-1.437.587q-.663.388-1.213.938L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75q-.05.375-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.962q.662.388 1.437.588Z"
            ></path>
          </svg>
          <p>Manage</p>
        </button>
      </router-link>
    </div>

    <!-- Mobile Navigation -->
    <div class="md:hidden flex items-center justify-self-end mr-24 h-24">
      <button
        @click="toggleMenu"
        class="flex gap-x-2 outline-none mobile-menu-button hover:text-blue-400 ease-out duration-150 p-1 hover:skew-x-6"
      >
        <svg
          class="w-6 h-6"
          x-show="!showMenu"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <p>Menu</p>
      </button>
    </div>

    <!-- Mobile menu -->
    <div class="hidden md:hidden mobile-menu col-span-2 w-full text-sm">
      <!-- Dashboard -->
      <div class="grid justify-center items-center l-color-navi h-14">
        <router-link
          class="flex place-items-center gap-2 text-white hover:text-blue-400 ease-out duration-200 hover:scale-125"
          :to="{ name: 'Home' }"
          @click="toggleMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--ic"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 19V5h6v14H5zm14 0h-6v-7h6v7zm0-9h-6V5h6v5z"
            ></path>
          </svg>
          Dashboard
        </router-link>
      </div>
      <!-- Schedule -->
      <div class="grid place-items-center l-color-navi h-14">
        <router-link
          :to="{ name: 'Schedule' }"
          class="flex gap-2 place-items-center text-white hover:text-blue-400 ease-out duration-150 duration-200 hover:scale-125"
          @click="toggleMenu"
        >
          <svg
            class="icon-ani"
            width="1em"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Schedule
        </router-link>
      </div>
      <!-- Booking -->
      <div class="grid place-items-center l-color-navi h-14">
        <router-link
          :to="{ name: 'Booking' }"
          class="flex place-items-center gap-2 text-white hover:text-blue-400 ease-out duration-200 hover:scale-125"
          @click="toggleMenu"
        >
          <svg
            class="icon-ani"
            width="1em"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Book now
        </router-link>
      </div>
      <!-- Manage -->
      <div class="grid place-items-center l-color-navi h-14">
        <router-link
          :to="{ name: 'Manage' }"
          class="flex gap-2 place-items-center text-white hover:text-blue-400 ease-out duration-200 hover:scale-125"
          @click="toggleMenu"
        >
          <!-- Hamburger Icon -->
          <svg width="1em" height="1em" viewBox="0 0 24 24" class="icon-ani">
            <path
              fill="currentColor"
              d="m9.25 22l-.4-3.2q-.325-.125-.612-.3q-.288-.175-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375q.3-.175.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3q.287.175.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.337v.675q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375q-.3.175-.6.3l-.4 3.2Zm2.8-6.5q1.45 0 2.475-1.025Q15.55 13.45 15.55 12q0-1.45-1.025-2.475Q13.5 8.5 12.05 8.5q-1.475 0-2.488 1.025Q8.55 10.55 8.55 12q0 1.45 1.012 2.475Q10.575 15.5 12.05 15.5Zm0-2q-.625 0-1.062-.438q-.438-.437-.438-1.062t.438-1.062q.437-.438 1.062-.438t1.063.438q.437.437.437 1.062t-.437 1.062q-.438.438-1.063.438ZM12 12Zm-1 8h1.975l.35-2.65q.775-.2 1.438-.588q.662-.387 1.212-.937l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.738q.05-.387.05-.787t-.05-.788q-.05-.387-.175-.737l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.963q-.663-.387-1.438-.587L13 4h-1.975l-.35 2.65q-.775.2-1.437.587q-.663.388-1.213.938L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75q-.05.375-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.962q.662.388 1.437.588Z"
            ></path>
          </svg>
          Manage
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
// Responsive Section
const toggleMenu = () => {
  const menu = document.querySelector("div.mobile-menu");
  menu.classList.toggle("hidden");
};
</script>

<style scoped>
.mobile-menu {
  background: linear-gradient(
    45deg,
    #489dff,
    #489dff,
    #783eff,
    #783eff,
    #c640ff,
    #c640ff,
    #783eff,
    #783eff,
    #489dff,
    #489dff
  );
  background-size: 1000% 1000%;
  animation: gradient 24s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
