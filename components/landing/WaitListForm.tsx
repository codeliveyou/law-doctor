'use client'
import { useState, FormEvent, ChangeEvent } from 'react';
import { Button, Select, TextField } from '@radix-ui/themes';
import Image from 'next/image';

type FormValues = {
  company_name: string;
  orgType: string;
  email: string;
  phone: string;
};

export default function () {
  const [formValues, setFormValues] = useState<FormValues>({
    company_name: '',
    orgType: '',
    email: '',
    phone: '',
  });


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(JSON.stringify(formValues));
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwDmWiXbUD3KnAvcWWV8crIYcM4EnVqAg03q9sZPsC7VckMMKvWobo0uQ8OvJPLbv4n8w/exec', {
        method: 'POST',
        mode: 'no-cors', // Important to avoid CORS issues
        body: JSON.stringify(formValues),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);

      if (!response.status) {
        // Handle success
        setFormValues({
          company_name: '',
          orgType: '',
          email: '',
          phone: '',
        })
        console.log('Form submitted successfully');
      } else {
        // Handle error
        console.error('Form submission failed');
      }
    } catch (error) {
      // Handle network error
      console.error('Network error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="text-indigo-200 font-medium">Company Name</label>
        <TextField.Root
          placeholder="e.g. Good Company"
          size="3"
          radius="large"
          name="company_name"
          value={formValues.company_name}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-indigo-200 font-medium">Organisation Type</label>
        <Select.Root size="3" name="orgType" value={formValues.orgType} onValueChange={(value) => 
          handleChange({
            target: { name: 'orgType', value } as unknown as EventTarget & (HTMLInputElement | HTMLSelectElement),
          } as ChangeEvent<HTMLInputElement | HTMLSelectElement>)
        }>
          <Select.Trigger radius="large" />
          <Select.Content>
            <Select.Item value="org1">Organization 1</Select.Item>
            <Select.Item value="org2">Organization 2</Select.Item>
            <Select.Item value="org3">Organization 3</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-indigo-200 font-medium">Business Email</label>
        <TextField.Root
          type="email"
          placeholder="e.g. james@goodcompany.com"
          size="3"
          radius="large"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-indigo-200 font-medium">Phone Number</label>
        <TextField.Root
          type="number"
          placeholder="e.g. 8123456789"
          size="3"
          radius="large"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" mt="4" size="3" radius="large">
        <Image src="/images/get_access.svg" width={16} height={16} alt="get_access" />
        Get Early Access
      </Button>
    </form>
  );
}
