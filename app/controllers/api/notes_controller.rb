class Api::NotesController < ApplicationController
  def index
    @notes = current_user.notes
    render :index
  end

  def show
    @note = current_user.notes.find(params[:id])
    render :show

  end

  def create
    @note = Note.new(notes_params)
    @note.author_id = current_user.id

    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end

  end

  def update
    @note = current_user.notes.find(params[:id])

    if @note.update
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = current_user.notes.find(params[:id])

    if @note.destroy
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  private

  def notes_params
    params.require(:note).permit(:title, :body)
  end

end
