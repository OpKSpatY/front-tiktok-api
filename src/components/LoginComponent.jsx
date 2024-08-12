import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useToggle, upperFirst } from '@mantine/hooks';
//import instance from '../services/axios';
import { GoogleButton } from './GoogleButton';
import { TwitterButton } from './TwitterButton';

function LoginComponent() {
  const [type, toggle] = useToggle(['login', 'registro']);
  const [loginOrRegisterButton, buttonToggle] = useToggle(['Login', 'Registre-se']);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  return (
    <Paper radius="md" p="xl" withBorder>
      <Text size="lg" fw={500}>
        Bem-vindo, realize o {type} com:
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton>
      </Group>

      <Divider label="Ou continue com suas credenciais" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          {type === 'registro' && (
            <TextInput
              label="Nome"
              placeholder="Seu nome aqui"
              value={form.values.name}
              onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
              radius="md"
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="Insira seu email"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
            radius="md"
          />

          <PasswordInput
            required
            label="Senha"
            placeholder="Insira sua senha"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Password should include at least 6 characters'}
            radius="md"
          />

          {type === 'register' && (
            <Checkbox
              label="Eu aceito os termos de uso"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
            />
          )}
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor component="button" type="button" c="dimmed" onClick={() => {toggle(); buttonToggle()}} size="xs">
            {type === 'registro'
              ? 'Já em uma conta? Realize login'
              : "Não tem uma conta? Registre-se"}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(loginOrRegisterButton)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}

export default LoginComponent;