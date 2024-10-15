"use client";
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { FiUser, FiPhone } from "react-icons/fi";
import { CiLock } from "react-icons/ci";

const Page = () => {
  const [isEmail, setIsEmail] = useState(true); // Track whether email or phone is selected
  const [form] = Form.useForm(); // Ant Design form hook for form handling

  const [emailFilled, setEmailFilled] = useState(false);
  const [passwordFilled, setPasswordFilled] = useState(false);

  const toggleInputField = (field: any) => {
    setIsEmail(field === "email");
  };

  const onFinish = (values: any) => {
    // This function is called when form is submitted successfully
    const { email, phone, password } = values;
    const loginField = isEmail ? email : phone;

    message.success(`Logged in with ${loginField} successfully!`);
    console.log("Form Data:", values);
    // Process the form data, for example, send it to a server.
  };

  const onFinishFailed = (errorInfo: any) => {
    // Handle form submission failure
    message.error("Login failed. Please check your inputs.");
    console.log("Failed:", errorInfo);
  };

  const handleEmailChange = (e: any) => {
    setEmailFilled(!!e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPasswordFilled(!!e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontWeight: 700,
          fontSize: "24px",
          color: "black",
          lineHeight: "48.76px",
          textAlign: "center",
        }}
      >
        LOGIN
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <h4
          onClick={() => toggleInputField("email")}
          style={{
            marginRight: "10px",
            borderBottom: isEmail ? "2px solid #B9B5B5" : "0px", // Active when selected
            cursor: "pointer",
          }}
        >
          Email
        </h4>
        <h4
          onClick={() => toggleInputField("number")}
          style={{
            borderBottom: !isEmail ? "2px solid #B9B5B5" : "0px", // Active when selected
            cursor: "pointer",
          }}
        >
          Number
        </h4>
      </div>

      <Form
        form={form}
        style={{ width: "450px" }}
        layout="vertical"
        onFinish={onFinish} // Handle successful form submission
        onFinishFailed={onFinishFailed} // Handle failed form submission
      >
        {/* Conditionally Render Email or Phone Field */}
        {isEmail ? (
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <div style={{ marginBottom: "8px" }}>
              <label
                style={{
                  fontFamily: "Open Sans",
                  fontSize: "20px",
                  fontWeight: "600",
                  lineHeight: "27.24px",
                  color: emailFilled ? "#3F4346" : "#B9B9B9", // Grey if not filled
                  padding: "10px 20px",
                }}
              >
                Email Address
              </label>
              <Input
                prefix={<FiUser />}
                placeholder="Enter your email"
                onChange={handleEmailChange}
                style={{
                  width: "100%",
                  height: "50px",
                  padding: "10px 20px",
                  borderRadius: "28px",
                  border: emailFilled
                    ? "1px solid #B9BBB8"
                    : "1px solid #B9B9B9", // Grey if not filled
                  boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.25)",
                  color: emailFilled ? "#3F4346" : "#B9B9B9", // Grey if not filled
                }}
              />
            </div>
          </Form.Item>
        ) : (
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
              {
                pattern: /^[0-9]{10}$/,
                message: "Please enter a valid 10-digit phone number!",
              },
            ]}
          >
            <div style={{ marginBottom: "8px" }}>
              <label
                style={{
                  fontFamily: "Open Sans",
                  fontSize: "20px",
                  fontWeight: "600",
                  lineHeight: "27.24px",
                  color: "#3F4346",
                  padding: "10px 20px",
                }}
              >
                Phone Number
              </label>
              <Input
                prefix={<FiPhone />}
                placeholder="Enter your phone number"
                style={{
                  width: "100%",
                  height: "50px",
                  padding: "10px 20px",
                  borderRadius: "28px",
                  border: "1px solid #B9BBB8",
                  boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.25)",
                }}
              />
            </div>
          </Form.Item>
        )}

        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 6, message: "Password must be at least 6 characters long!" },
          ]}
        >
          <div style={{ marginBottom: "8px" }}>
            <label
              style={{
                fontFamily: "Open Sans",
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "27.24px",
                color: passwordFilled ? "#3F4346" : "#B9B9B9", // Grey if not filled
                padding: "10px 20px",
              }}
            >
              Password
            </label>
            <Input.Password
              prefix={<CiLock />}
              placeholder="Enter your password"
              onChange={handlePasswordChange}
              style={{
                width: "100%",
                height: "50px",
                padding: "10px 20px",
                borderRadius: "28px",
                border: passwordFilled
                  ? "1px solid #B9BBB8"
                  : "1px solid #B9B9B9", // Grey if not filled
                boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.25)",
                color: passwordFilled ? "#3F4346" : "#B9B9B9", // Grey if not filled
              }}
            />
          </div>
        </Form.Item>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Button
            htmlType="submit"
            style={{
              width: "100%",
              height: "47px",
              padding: "20px",
              gap: "10px",
              fontWeight: "600",
              lineHeight: "21.79px",
              fontSize: "16px",
              borderRadius: "7px",
              background: "#70726F",
              color: "#FFF",
            }}
          >
            Login
          </Button>
        </div>
      </Form>

      <div
        style={{
          padding: "10px",
          fontFamily: "Open Sans",
        }}
      >
        <p
          style={{
            fontFamily: "Open Sans",
            fontSize: "16px",
            fontWeight: "600",
            color: "#3F4346",
          }}
        >
          Don’t have an account?
          <button
            style={{
              fontFamily: "Open Sans",
              fontSize: "16px",
              fontWeight: "600",
              color: "#546FFF",
              background: "none",
              border: "none",
              cursor: "pointer",
              paddingLeft: "10px",
            }}
          >
            Signup
          </button>
        </p>
      </div>
    </div>
  );
};

export default Page;
