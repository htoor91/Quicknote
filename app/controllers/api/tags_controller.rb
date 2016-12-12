class Api::TagsController < ApplicationController

  def index
    @tags = []
    current_user.notes.each do |note|
      @tags += note.tags
    end

    render json: @tags.uniq.reverse
  end

  def show
    @tag = Tag.find(params[:id])
    @tagged_notes = []
    if @tag
      current_user.notes.each do |note|
        @tagged_notes << note if note.taggings.any? { |tagging| tagging.tag_id == @tag.id }
      end
      render json: @tagged_notes
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def create
    @tag = Tag.find_or_create_by(name: tag_params[:name])
    @tagging = Tagging.find_or_create_by(note_id: tag_params[:note_id], tag_id: @tag.id)

    render json: @tag
  end

  def destroy
    @tag = Tag.find(params[:id])
    if @tag
      @tag.destroy
      render json: @tag
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  private

  def tag_params
    params.require(:tag).permit(:name, :note_id)
  end
end
