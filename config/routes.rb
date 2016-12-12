Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :notes, only: [:create, :update, :destroy, :index, :show]
    resources :notebooks, only: [:index, :show, :create, :update, :destroy]
    resources :tags, only: [:index, :show, :create, :destroy]
  end

  # get 'api/notes/:id/tags', to: 'api/notes#tags'
  # delete 'api/tagging/:id', to: 'api/tags#destroyTagging'
end
