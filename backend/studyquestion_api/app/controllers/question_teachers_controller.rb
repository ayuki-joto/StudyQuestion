class QuestionTeachersController < ApplicationController
  before_action :set_question_detail, only: [:show, :update, :destroy]

  # GET /question_teachers
  def index

    data = Array.new
    @question_details = QuestionDetail.all.each do |question|
      @student = Student.find(question[:student_id])
      menter = {}
      menter[:menter] = ''
      if Menter.find_by(student_id: @student[:id]).present?
        menter[:menter] = Menter.find_by(student_id: @student[:id])
      end
      if Answer.where(question_id: question[:id]).count <= 7
        data << [
            :id => question[:id],
            :subject => question[:subject],
            :student_name => @student[:name],
            :student_icon => @student[:icon],
            :student_school_year => @student[:school_year],
            :text => question[:text],
            :photo => question[:photo],
            :menter => menter[:menter]
        ]
      end
    end
    render json: data
  end

  # GET /question_teachers/1
  def show
    @student = Student.find(@question_detail[:student_id])
    menter = {}
    menter[:menter] = ''
    if Menter.find_by(student_id: @student[:id]).present?
      menter[:menter] = Menter.find_by(student_id: @student[:id])
    end
    data = [
        :id => @question_detail[:id],
        :subject => @question_detail[:subject],
        :text => @question_detail[:text],
        :photo => @question_detail[:photo],
        :student_name => @student[:name],
        :student_icon => @student[:icon],
        :menter => menter[:menter]
    ]

    render json: data
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
