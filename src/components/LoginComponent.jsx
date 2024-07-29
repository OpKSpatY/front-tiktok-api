import { Button, Checkbox, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import instance from '../services/axios';

function LoginComponent() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido'),
    },
  });

  async function postData(values){
    try{
      const response = await instance.post('/login', values, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(response)
      return response
    } catch(error) {
      console.log("Erro!")
      // Adicionar notification
    }
  }

  return (
    <form onSubmit={form.onSubmit((values) => postData(values))}>
      <TextInput
        withAsterisk
        label="Email"
        placeholder="seuemail@email.com"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Checkbox
        mt="md"
        label="I agree to sell my privacy"
        key={form.key('termsOfService')}
        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export default LoginComponent;