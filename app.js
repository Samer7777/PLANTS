/*navbar */
const humberger =document.getElementById('humburger')
const navul =document.getElementById('navbar')

humberger.addEventListener('click', ()=>{
  navul.classList.toggle('show')
});


const filter = document.querySelector('.gallery-filter'),
galleryItem = document.querySelectorAll('.gallery-item-inner');



filter.addEventListener('click', (event) =>{
  if(event.target.classList.contains('filter-item')){
    filter.querySelector('.active').classList.remove('active');
    event.target.classList.add('active');

    const filterValue = event.target.getAttribute('date-fillter');
    const linkItem = document.querySelector('.linkItem');
    galleryItem.forEach((item) => {
      if(item.classList.contains(filterValue) || filterValue === 'all'){
        item.classList.remove('hide');
        item.classList.add('explore');
      }
      else{
        item.classList.remove('explore');
        item.classList.add('hide');
      }
    })

    
  }
})