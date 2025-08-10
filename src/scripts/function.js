// export function setupMenuToggle() {
//   const toggleBtn = document.querySelector('.nav-menu-show');
//   const menu = document.querySelector('.sidebar');
  
//   if (!toggleBtn || !menu) return;

//   // Toggle menu khi click nút
//   toggleBtn.addEventListener('click', (e) => {
//     e.stopPropagation(); // Ngăn click lan ra document
//     menu.classList.toggle('show-sidebar');
//   });

//   // Ngăn click bên trong menu bị đóng
//   menu.addEventListener('click', (e) => {
//     e.stopPropagation();
//   });

//   // Click bên ngoài -> ẩn menu
//   document.addEventListener('click', () => {
//     menu.classList.remove('show-sidebar');
//   });
//   // ✅ Scroll xuống quá 3px thì ẩn menu
// //   window.addEventListener('scroll', () => {
// //     if (window.scrollY > 3) {
// //       menu.classList.remove('show-sidebar');
// //     }
// //   });
// }

// export function setupMenuToggle1() {
//   const toggleBtn1 = document.querySelector('.icon-show-sidebar');
//   const menu1 = document.querySelector('.sidebar');
  
//   if (!toggleBtn1 || !menu1) return;

//   // Toggle menu khi click nút
//   toggleBtn1.addEventListener('click', (e) => {
//     e.stopPropagation(); // Ngăn click lan ra document
//     menu1.classList.toggle('show-sidebar');
//   });

//   // Ngăn click bên trong menu bị đóng
//   menu1.addEventListener('click', (e) => {
//     e.stopPropagation();
//   });

//   // Click bên ngoài -> ẩn menu
//   document.addEventListener('click', () => {
//     menu1.classList.remove('show-sidebar');
//   });
// }

export function setupMenuToggleGeneric(toggleSelector, menuSelector) {
  const toggleBtn = document.querySelector(toggleSelector);
  const menu = document.querySelector(menuSelector);

  if (!toggleBtn || !menu) return;

  // Toggle menu khi click nút
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Ngăn click lan ra document
    menu.classList.toggle('show-sidebar');
  });

  // Ngăn click bên trong menu bị đóng
  menu.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Click bên ngoài -> ẩn menu
  document.addEventListener('click', () => {
    menu.classList.remove('show-sidebar');
  });

}

export function setupdark() {  
  const checkbox = document.getElementById('checkbox');

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      document.documentElement.classList.add('dark'); // thêm class vào <html>
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
}