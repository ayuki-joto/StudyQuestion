Rails.application.routes.draw do
  resources :menters
  resources :teachers
  resources :students
  resources :question_teachers
  resources :question_students
  resources :answers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
