Rails.application.routes.draw do
   root to: 'pages#home'
   get 'about', to: 'pages#about'
   get 'resume', to: 'pages#resume'
   get 'contact', to: 'pages#contact'
end
