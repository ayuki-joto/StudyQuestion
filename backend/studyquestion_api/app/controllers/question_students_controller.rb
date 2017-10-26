class QuestionStudentsController < ApplicationController
  before_action :set_question_detail, only: [:show, :update, :destroy]

  # GET /question_students
  def index
    data = Array.new
    @question_details = QuestionDetail.where(student_id: params[:id]).order(id: :desc).each do |question|
      answer = {}
      answer[:best] = false
      @answers = Answer.where(question_id: question[:id]).each do |ans|
        if ans[:best_answer] == 1
          answer[:best] =true
        end
      end
      answer[:count] = @answers.count

      data << [
          :id => question[:id],
          :subject => question[:subject],
          :text => question[:text],
          :answer_count => answer[:count],
          :is_answer_best => answer[:best],
      ]
    end
    render json: data
  end

  # GET /question_students/1
  def show
    data = Array.new
    data <<[
        :id => @question_detail[:id],
        :subject => @question_detail[:subject],
        :text => @question_detail[:text],
        :photo => @question_detail[:photo],
    ]
    if Answer.where(question_id: @question_detail[:id]).present?
      @answers = Answer.where(question_id: @question_detail[:id]).each do |answer|
        @teacher = Teacher.where(id: answer[:teacher_id])
        data << [
            :answer_text => answer[:text],
            :answer_photo => answer[:photo],
            :is_answer_best => answer[:best_answer],
            :teacher_id => answer[:teacher_id],
            :teacher_photo => @teachers[:photo],
            :teacher_name => @teachers[:name],
        ]
      end
    end
    render json: data
  end

  # POST /question_students
  def create
    @question_detail = QuestionDetail.new(question_detail_params)


    if @question_detail.save
      render json: @question_detail, status: :created, location: @question_detail
    else
      render json: @question_detail.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /question_students/1
  def update
    if @question_detail.update(question_detail_params)
      render json: @question_detail
    else
      render json: @question_detail.errors, status: :unprocessable_entity
    end
  end

  # DELETE /question_students/1
  def destroy
    @question_detail.destroy
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_question_detail
    @question_detail = QuestionDetail.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def question_detail_params
    params.fetch(:question_detail, {})
  end

end
