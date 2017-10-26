class MentersController < ApplicationController
  before_action :set_menter, only: [:show, :update, :destroy]

  # GET /menters
  def index
    @menters = Menter.all

    render json: @menters
  end

  # GET /menters/1
  def show
    render json: @menter
  end

  # POST /menters
  def create
    @menter = Menter.new(menter_params)

    if @menter.save
      render json: @menter, status: :created, location: @menter
    else
      render json: @menter.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /menters/1
  def update
    if @menter.update(menter_params)
      render json: @menter
    else
      render json: @menter.errors, status: :unprocessable_entity
    end
  end

  # DELETE /menters/1
  def destroy
    @menter.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_menter
      @menter = Menter.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def menter_params
      params.fetch(:menter, {})
    end
end
