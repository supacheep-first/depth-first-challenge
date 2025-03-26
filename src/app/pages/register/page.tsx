"use client";

import React from "react";
import { Form, Input } from "antd";

interface RegistrationFormValues {
  name: string;
  email: string;
  address: string;
  password: string;
  confirmPassword: string;
}

const RegistrationForm = () => {
  const onFinish = (values: RegistrationFormValues) => {
    console.log("Values of form: ", values);
  };

  return (
    <div className="max-w-md mx-auto p-6 m-6 bg-white rounded-md shadow-md">
      <Form
        name="registration"
        onFinish={onFinish}
        layout="vertical"
        className="space-y-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-center mb-4 font-slate-600">
              ระบบสมัครสมาชิก
            </h2>
          </div>
          <div>
            <Form.Item
              label="ชื่อ - สกุล"
              name="name"
              rules={[{ required: true, message: "กรอกข้อมูลให้ครบถ้วน" }]}
              validateStatus=""
            >
              <Input placeholder="ระบุชื่อ - สกุล" />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              label="email"
              name="email"
              rules={[
                { required: true, message: "กรอกข้อมูลให้ครบถ้วน" },
                { type: "email", message: "รูปแบบ email ไม่ถูกต้อง" },
              ]}
              validateStatus=""
            >
              <Input placeholder="ระบุ email" />
            </Form.Item>
          </div>
          <div className="col-span-2">
            <Form.Item label="ที่อยู่" name="address">
              <Input.TextArea
                placeholder="ระบุที่อยู่"
                showCount
                maxLength={400}
                rows={1}
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "กรอกข้อมูลให้ครบถ้วน" }]}
              validateStatus=""
            >
              <Input.Password
                placeholder="ระบุ Password"
                visibilityToggle={false}
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "กรอกข้อมูลให้ครบถ้วน" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("รหัสผ่านไม่ตรงกัน"));
                  },
                }),
              ]}
              validateStatus=""
            >
              <Input.Password
                placeholder="ระบุ Confirm Password"
                visibilityToggle={false}
              />
            </Form.Item>
          </div>
          <div className="col-span-2 flex justify-center">
            <Form.Item>
              <button
                type="submit"
                className="bg-slate-700 text-white px-14 py-2.5 rounded-full hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                สมัครสมาชิก
              </button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default RegistrationForm;
