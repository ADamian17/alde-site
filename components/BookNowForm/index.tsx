import { Button, Combobox, Group, Input, Space, Stack, Text, Textarea, TextInput, useCombobox } from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react'

type BookNowFormProps = {
  selectedPackage: string;
}

const BookNowForm: React.FC<BookNowFormProps> = ({ selectedPackage }) => {
  const packages = ['STANDARD', 'WASH & WAX', 'FULL DETAIL',];

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      fullName: '',
      phone: '',
      message: '',
      package: selectedPackage,
    },

    validate: {
      fullName: (value) => (value.length > 0 ? null : 'Full name is required'),
      message: (value) => (value.length > 0 ? null : 'Message is required'),
      package: (value) => (value.length > 0 ? null : 'Package selection is required'),
      phone: (value) => (value.length > 0 ? null : 'Phone number is required'),
    },
  });

  const options = packages.map((item) => (
    <Combobox.Option value={item} key={item} onClick={() => { form.setFieldValue('package', item); }}>
      {item}
    </Combobox.Option>
  ));

  return (
    <section>
      <Text fw="bold">PRICE MAY VARY ON THE CONDITION OF THE VEHICLE</Text>
      <Text fw="bold">FINAL PRICE IS CONFIRMED AFTER INSPECTION</Text>

      <Space h="xl" />

      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Stack>
          <Combobox
            store={combobox}
            onOptionSubmit={(val) => {
              form.setFieldValue('package', val);
              combobox.closeDropdown();
            }}
          >
            <Combobox.Target>
              <Input.Wrapper label="Selected Package" withAsterisk>
                <Input
                  component="button"
                  key={form.key('package')}
                  onBlur={() => combobox.closeDropdown()}
                  onClick={() => combobox.openDropdown()}
                  onFocus={() => combobox.openDropdown()}
                  pointer
                  rightSection={<Combobox.Chevron />}
                  rightSectionPointerEvents='none'
                  type='button'
                >
                  {form.getInputProps('package').defaultValue}
                </Input>
              </Input.Wrapper>
            </Combobox.Target>

            <Combobox.Dropdown>
              <Combobox.Options>{options}</Combobox.Options>
            </Combobox.Dropdown>
          </Combobox>

          <TextInput
            withAsterisk
            label="Full Name"
            placeholder="Enter your full name"
            key={form.key('fullName')}
            {...form.getInputProps('fullName')}
          />

          <TextInput
            withAsterisk
            label="Phone Number"
            placeholder="Enter your phone number"
            key={form.key('phone')}
            {...form.getInputProps('phone')}
          />

          <Textarea
            withAsterisk
            label="Message"
            placeholder="Enter your message"
            key={form.key('message')}
            {...form.getInputProps('message')}
            rows={5}
          />

          <Group justify="flex-end" mt="md">
            <Button color='violet' type="submit">Submit</Button>
          </Group>
        </Stack>
      </form>
    </section>
  )
}

export default BookNowForm
