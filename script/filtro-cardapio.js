 /*   filtro pagina cardapio */

  document.addEventListener('DOMContentLoaded', function () {
    // Elementos do DOM
    const filterButtons = document.querySelectorAll('.categoria-btn');
    const productSections = document.querySelectorAll('.produto-categoria');
    const categoryTitles = document.querySelectorAll('.categoria-title');
  
    // Filtro de categorias
    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Atualiza botões ativos
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
  
        const filterValue = this.getAttribute('data-categoria');
  
        // Filtra produtos
        productSections.forEach(section => {
          const sectionCategory = section.getAttribute('data-categoria');
  
          if (filterValue === 'todos' || sectionCategory === filterValue) {
            section.style.display = 'block';
            // Força o redesenho para a animação
            void section.offsetWidth;
            section.style.opacity = '1';
          } else {
            section.style.opacity = '0';
            setTimeout(() => {
              section.style.display = 'none';
            }, 300); // Tempo igual à transição CSS
          }
        });
  
        // Mostra/oculta títulos de categoria conforme necessário
        if (filterValue === 'todos') {
          categoryTitles.forEach(title => title.style.display = 'block');
        } else {
          categoryTitles.forEach(title => title.style.display = 'none');
          const activeTitle = document.querySelector(`.produto-categoria[data-categoria="${filterValue}"] .categoria-title`);
          if (activeTitle) {
            activeTitle.style.display = 'block';
          }
        }
      });
    });
  
    // Favoritos
    document.querySelectorAll('.btn-favorito').forEach(button => {
      button.addEventListener('click', function () {
        const icon = this.querySelector('i');
        icon.classList.toggle('far');
        icon.classList.toggle('fas');
        this.style.color = 'var(--rosa)';
      });
    });
  });