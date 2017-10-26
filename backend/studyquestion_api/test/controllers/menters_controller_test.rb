require 'test_helper'

class MentersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @menter = menters(:one)
  end

  test "should get index" do
    get menters_url, as: :json
    assert_response :success
  end

  test "should create menter" do
    assert_difference('Menter.count') do
      post menters_url, params: { menter: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show menter" do
    get menter_url(@menter), as: :json
    assert_response :success
  end

  test "should update menter" do
    patch menter_url(@menter), params: { menter: {  } }, as: :json
    assert_response 200
  end

  test "should destroy menter" do
    assert_difference('Menter.count', -1) do
      delete menter_url(@menter), as: :json
    end

    assert_response 204
  end
end
