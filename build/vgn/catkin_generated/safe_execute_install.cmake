execute_process(COMMAND "/home/dxy/catkin_active_grasp_ws/build/vgn/catkin_generated/python_distutils_install.sh" RESULT_VARIABLE res)

if(NOT res EQUAL 0)
  message(FATAL_ERROR "execute_process(/home/dxy/catkin_active_grasp_ws/build/vgn/catkin_generated/python_distutils_install.sh) returned error code ")
endif()
