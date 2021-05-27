<style>
  input::-webkit-calendar-picker-indicator {
    display: none;
  }
</style>

<div
  class="relative focus-within:border-blue-500 focus-within:ring-2
  focus-within:ring-blue-200 rounded-lg">
  <div class="relative z-20 px-3 flex items-center flex-wrap gap-x-2 py-2">
    <span class="bg-emerald-100 text-emerald-700 rounded px-2 py-1">
        Engineering
    </span>
    <span class="bg-amber-100 text-amber-700 rounded px-2 py-1">
        Architecture
    </span>
    <input
      placeholder="add..."
      class="relative z-20 border-0 bg-transparent focus:border-transparent
      focus:ring-0 h-10 w-20"
      type="text"
      list="skills" />
  </div>

  <div class="border px-2 rounded-lg w-full h-full absolute top-0 z-10" />
  <datalist id="skills">
    <option value="Engineering">Engineering</option>
    <option value="Architecture">Architecture</option>
    <option value="3D Printing Expert">3D Printing Expert</option>
  </datalist>
</div>
