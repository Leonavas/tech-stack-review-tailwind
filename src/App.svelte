<script>
  import ChipsInput from './lib/ChipsInput.svelte'
</script>

<style lang="postcss">
  input[type='radio']:checked ~ div {
    @apply bg-blue-50 border-blue-600;
  }

  .chips {
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 10px;
    margin: 20px;
    display: block;
    width: 400px;
    max-width: 100%;
  }

  chips.input {
    border: none;
    appearance: none;
  }
</style>

<div class="sticky top-0 z-40">

  <div
    class="hidden bg-lightBlue-50 w-80 h-screen fixed md:block md:border-r-2
    md:border-gray-100">
    <div class="flex justify-around items-center px-3 py-4">
      <div
        class="rounded-full h-12 w-12 bg-rose-300 flex items-center
        justify-center relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 text-gray-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0
            00-7-7z" />
        </svg>
      </div>
      <div class="flex flex-col">
        <p class="text-gray-500 text-sm">Welcome back,</p>
        <p class="text-gray-800 font-bold text-lg">Sarah Smith</p>
      </div>
      <div
        class="bg-red-500 text-gray-100 rounded-full h-4 w-4 flex items-center
        justify-center text-xs font-bold">
        5
      </div>
      <button
        class="p-2 shadow-lg bg-gray-100 border border-gray-200
        border-opacity-70 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573
            1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065
            2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94
            1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426
            1.756-2.924 1.756-3.35 0a1.724 1.724 0
            00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0
            00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0
            001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07
            2.572-1.065z" />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>
    </div>
    <div class="mx-5 flex flex-col mt-5 gap-6 h-[84%]">
      <div
        class="flex gap-2 cursor-pointer text-gray-700 hover:underline
        hover:text-blue-500 items-center rounded p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <p class="text-sm">Search</p>
      </div>
      <!-- Menu Dashboard -->
      <div
        class="flex gap-2 cursor-pointer text-gray-700 hover:underline
        items-center rounded p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1
            0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0
            001 1m-6 0h6" />
        </svg>
        <p class="text-sm">Dashboard</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 ml-auto"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0
            011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110
            2H4a1 1 0 01-1-1z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <!-- Menu Project Manager -->
      <div
        class="flex gap-2 cursor-pointer text-gray-700 hover:underline
        items-center rounded p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0
            00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012
            2" />
        </svg>
        <p class="text-sm">Project Manager</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 ml-auto"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0
            011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110
            2H4a1 1 0 01-1-1z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <!-- Menu Information -->
      <div
        class="flex gap-2 cursor-pointer text-gray-700 hover:underline
        items-center bg-white rounded p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="text-sm">Information</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 ml-auto"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0
            011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110
            2H4a1 1 0 01-1-1z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <!-- Menu Sales -->
      <div
        class="flex gap-2 cursor-pointer text-gray-700 hover:underline
        items-center rounded p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <p class="text-sm">Sales</p>
        <div
          class="bg-blue-500 text-gray-100 rounded-full h-4 w-4 flex
          items-center justify-center text-xs font-bold ml-auto">
          5
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0
            011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110
            2H4a1 1 0 01-1-1z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <!-- menu Analytics -->
      <div
        class="flex gap-2 cursor-pointer text-gray-700 hover:underline
        items-center rounded p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
        <p class="text-sm">Analytics</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 ml-auto"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0
            011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110
            2H4a1 1 0 01-1-1z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <!-- Menu Crypto -->
      <div
        class="flex gap-2 cursor-pointer text-gray-700 hover:underline
        items-center rounded p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293
            4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0
            01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
            clip-rule="evenodd" />
        </svg>
        <p class="text-sm">Crypto</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 ml-auto"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0
            011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110
            2H4a1 1 0 01-1-1z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <!-- Menu Support -->
      <div
        class="flex gap-2 cursor-pointer text-gray-700 hover:underline
        items-center mt-auto rounded p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863
            9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3
            12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <p class="text-sm">Support</p>
      </div>
      <!-- Menu Sign Out -->
      <div
        class="flex gap-2 cursor-pointer text-gray-700 hover:underline
        items-center rounded p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3
            0 013-3h4a3 3 0 013 3v1" />
        </svg>
        <p class="text-sm">Sign Out</p>
      </div>
    </div>
  </div>
  <div
    class="h-12 bg-lightBlue-50 flex items-center justify-between px-3 md:h-20
    md:border-b-2 md:border-gray-100 md:bg-white md:ml-80">
    <button class="text-gray-700 text-base flex items-center md:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7" />
      </svg>
      Back
    </button>
    <h1 class="text-gray-900 font-bold text-lg md:text-2xl md:flex">
      <button
        class="hidden relative bg-gray-100 md:flex md:items-center md:px-3
        md:rounded-2xl md:mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 tex-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>
      Information
      <span class="invisible md:visible md:ml-2">🤓</span>
    </h1>

    <div class="flex gap-4">
      <button
        class="hidden md:block md:p-2 md:border md:border-gray-200 md:rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-[#0C977F]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955
            11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9
            11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </button>
      <button
        class="hidden md:block md:p-2 md:border md:border-gray-200 md:rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0
            00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0
            .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </button>
      <button
        class="text-base text-blue-600 md:text-gray-100 md:bg-gradient-to-t
        md:from-blue-600 md:to-blue-400 md:shadow md:px-5 md:py-1 md:rounded">
        Confirm
      </button>
    </div>

  </div>

</div>

<main class="p-4 md:ml-80">
  <div class="flex flex-col items-center md:hidden">
    <div
      class="rounded-full h-16 w-16 bg-rose-300 flex items-center justify-center
      relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 text-gray-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
      <button
        class="rounded-full bg-gradient-to-t from-blue-600 to-blue-400 shadow
        absolute -right-1 -bottom-1 h-6 w-6 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-gray-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536
            3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </button>
    </div>
    <span class="text-lg font-bold mt-3">Sarah Smith</span>
    <span class="text-sm font-light text-gray-700">Member</span>
    <div
      class="w-full bg-gray-100 rounded-lg mt-3 flex items-center
      justify-between px-2 py-1">
      <button class="px-5 py-1 text-gray-500 text-sm">Friends</button>
      <button class="px-5 py-1 text-gray-500 text-sm">Bookmarks</button>
      <button
        class="px-5 py-1 text-blue-500 text-sm font-semibold bg-white rounded-lg">
        Settings
      </button>
    </div>
  </div>
  <div class="flex flex-1 w-full">
    <div class="space-y-5 mt-4 flex-grow">
      <!-- User information -->
      <div>
        <div class="flex flex-col gap-1">
          <p class="font-semibold text-gray-900 text-lg">User information</p>
          <p class="text-gray-500 text-base font-normal">
            Enter the required information below to register. You can change it
            anytime.
          </p>
        </div>
      </div>
      <!-- User information -->
      <!-- Email -->
      <div>
        <div class="flex flex-col gap-2">
          <p class="font-semibold text-gray-900 text-lg">Email address</p>
          <input
            class=" border-red-500 ring-2 ring-red-200 "
            type="email"
            value="username@domain.com" />
          <div class="text-xs mt-1 flex gap-1 text-red-500 md:items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75
                1.334-.213 2.98-1.742 2.98H4.42c-1.53
                0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012
                0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd" />
            </svg>
            <p>
              Please enter a valid email address in the format
              <span class="font-bold">username@fomain.com</span>
            </p>
          </div>
        </div>
      </div>
      <!-- Email -->
      <!-- Full Name -->
      <div class="flex flex-col gap-2">
        <p class="font-semibold text-gray-900 text-lg">Full name</p>
        <div class="flex gap-3 ">
          <div
            class="relative border-1 focus-within:border-blue-500
            focus-within:ring-2 focus-within:ring-blue-200 rounded-lg w-full">
            <input
              type="text"
              name="username"
              placeholder="
              "
              class="rounded-lg block w-full text-sm appearance-none
              focus:outline-none bg-transparent pt-5" />
            <label
              for="username"
              class="absolute bottom-4 left-3 text-sm -z-1 duration-300 origin-0
              text-gray-600">
              First Name
            </label>
          </div>
          <div
            class="relative focus-within:border-blue-500 focus-within:ring-2
            focus-within:ring-blue-200 rounded-lg w-full">
            <input
              type="text"
              name="username"
              placeholder="
              "
              class="rounded-lg block w-full text-sm appearance-none
              focus:outline-none bg-transparent pt-5" />
            <label
              for="username"
              class="absolute bottom-4 left-3 text-sm -z-1 duration-300 origin-0
              text-gray-600">
              Second Name
            </label>
          </div>
        </div>
      </div>
      <!-- Address -->
      <!-- Address -->
      <div class="flex flex-col gap-2">
        <p class="font-semibold text-gray-900 text-lg">Address</p>

        <div class="flex flex-col gap-2 md:flex-row md:flex-wrap md:gap-2 md:w-auto">
          <select class="form-select md:w-56">
            <option value="New Mexico" selected>New Mexico</option>
            <option value="New Mexico2">São Paulo</option>
          </select>
          <select class="form-select md:w-56">
            <option value="New Mexico" selected>Albuquerque</option>
            <option value="New Mexico2">Praia Grande</option>
          </select>
          <input class="md:w-20" type="tel" value="87101" />
          <input class="md:w-60" type="tel" placeholder="Street" />
        </div>

      </div>
      <!-- Address -->
      <!-- Hourly Rate -->
      <div class="flex flex-col gap-2">
        <p class="font-semibold text-gray-900 text-lg">Hourly rate</p>
        <div class="grid grid-cols-2 gap-4">
          <label class="flex py-3 items-center gap-2 text-gray-800 relative">
            <input
              class="z-20 mx-2 h-6 w-6 focus:outline-none focus:ring-offset-0
              focus:ring-0"
              name="hourlyRate"
              type="radio" />
            <div class="border px-2 rounded-lg w-full h-full absolute z-10" />
            <span class="z-20 select-none">$10-20</span>
          </label>

          <label class="flex py-3 items-center gap-2 text-gray-800 relative">
            <input
              class="z-20 mx-2 h-6 w-6 focus:outline-none focus:ring-offset-0
              focus:ring-0"
              name="hourlyRate"
              type="radio" />
            <div class="border px-2 rounded-lg w-full h-full absolute z-10" />
            <span class="z-20 select-none">$20-40</span>
          </label>
          <label class="flex py-3 items-center gap-2 text-gray-800 relative">
            <input
              class="z-20 mx-2 h-6 w-6 focus:outline-none focus:ring-offset-0
              focus:ring-0"
              name="hourlyRate"
              type="radio" />
            <div class="border px-2 rounded-lg w-full h-full absolute z-10" />
            <span class="z-20 select-none">$40-80</span>
          </label>
          <label class="flex py-3 items-center gap-2 text-gray-800 relative">
            <input
              class="z-20 mx-2 h-6 w-6 focus:outline-none focus:ring-offset-0
              focus:ring-0"
              name="hourlyRate"
              type="radio" />
            <div class="border px-2 rounded-lg w-full h-full absolute z-10" />
            <span class="z-20 select-none">> $80</span>
          </label>
        </div>
      </div>
      <!-- Hourly Rate -->
      <!-- Choose your skills -->
      <div class="flex flex-col gap-2">
        <p class="font-semibold text-gray-900 text-lg">Choose your skills</p>
        <ChipsInput />
      </div>
      <!-- Choose your skills -->
    </div>
    <div class="hidden md:w-96 md:flex md:flex-col md:gap-4 md:mx-7">
      Profile Photo
      <div
        class="rounded-full h-16 w-16 bg-rose-300 flex items-center
        justify-center relative mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 text-gray-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0
            00-7-7z" />
        </svg>
        <button
          class="rounded-full bg-gradient-to-t from-blue-600 to-blue-400 shadow
          absolute -right-1 -bottom-1 h-6 w-6 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536
              3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
      </div>
      <!-- Choose interest -->
      <p class="text-sm">Choose your main interest</p>
      <select class="form-select">
        <option value="Science" selected>Science</option>
        <option value="Education">Education 🎓</option>
        <option value="Art">Art 🎭</option>
        <option value="Politics">Politics 🗳</option>
      </select>
      <p class="text-sm">Select your gender</p>
      <div class="flex gap-2 justify-between">
        <label
          class="flex py-3 items-center gap-2 text-gray-800 relative
          cursor-pointer">
          <input
            class="z-20 h-6 w-6 focus:outline-none focus:ring-offset-0
            focus:ring-0"
            name="gender"
            type="radio" />
          <span class="z-20 select-none">Male</span>
        </label>
        <label
          class="flex py-3 items-center gap-2 text-gray-800 relative
          cursor-pointer">
          <input
            class="z-20 h-6 w-6 focus:outline-none focus:ring-offset-0
            focus:ring-0"
            name="gender"
            type="radio" />
          <span class="z-20 select-none">Femane</span>
        </label>
        <label
          class="flex py-3 items-center gap-2 text-gray-800 relative
          cursor-pointer">
          <input
            class="z-20 h-6 w-6 focus:outline-none focus:ring-offset-0
            focus:ring-0"
            name="gender"
            type="radio" />
          <span class="z-20 select-none">Non-binary</span>
        </label>
      </div>
    </div>

  </div>

</main>

<nav
  class="h-16 bg-trueGray-100 sticky bottom-0 z-40 flex items-center px-1 py-1
  overflow-x-hidden md:hidden"
  style="">
  <button
    class="bg-blue-100 rounded-xl h-full text-blue-500 px-3 py-1 flex flex-col
    items-center w-1/5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
    <span class="text-xs">Profile</span>
  </button>
  <button
    class="bg-transparent rounded-xl h-full text-gray-700 py-1 flex flex-col
    items-center w-1/5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0
        01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6
        0h6" />
    </svg>
    <span class="text-xs">Dashboard</span>
  </button>
  <button
    class="bg-transparent rounded-xl h-full text-gray-700 py-1 flex flex-col
    items-center w-1/5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
    <span class="text-xs">Sales</span>
  </button>
  <button
    class="bg-transparent rounded-xl h-full text-gray-700 py-1 flex flex-col
    items-center w-1/5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9
        5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
    <span class="text-xs">Projects</span>
  </button>
  <button
    class="bg-transparent rounded-xl h-full text-gray-700 py-1 flex flex-col
    items-center w-1/5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184
        1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0
        014 0z" />
    </svg>
    <span class="text-xs">Ecommerce</span>
  </button>

</nav>
