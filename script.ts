const start_button: HTMLElement | null = document.getElementById('start_btn')
const home_display: HTMLElement | null = document.getElementById('home_page')

const totoro_trois_display: HTMLElement | null = document.getElementById('totoro_trois_page')
const totoro_deux_display: HTMLElement | null = document.getElementById('totoro_deux_page')


function handle_user_click() {
  if (home_display !== null && totoro_trois_display !== null){
      home_display.classList.add('no_display')
      totoro_trois_display.classList.remove('no_display')
      console.log("BB");
      
  }
}

if (start_button !== null) {
  start_button.addEventListener('click', handle_user_click)
  console.log("aa");
  
}