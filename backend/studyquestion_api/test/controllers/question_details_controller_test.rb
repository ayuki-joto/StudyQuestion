require 'test_helper'

class QuestionDetailsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @question_detail = question_details(:one)
  end

  test "should get index" do
    get question_details_url, as: :json
    assert_response :success
  end

  test "should create question_detail" do
    assert_difference('QuestionDetail.count') do
      post question_details_url, params: { question_detail: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show question_detail" do
    get question_detail_url(@question_detail), as: :json
    assert_response :success
  end

  test "should update question_detail" do
    patch question_detail_url(@question_detail), params: { question_detail: {  } }, as: :json
    assert_response 200
  end

  test "should destroy question_detail" do
    assert_difference('QuestionDetail.count', -1) do
      delete question_detail_url(@question_detail), as: :json
    end

    assert_response 204
  end
end
