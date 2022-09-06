import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import LogoSecundary from "../../assets/logo-primary.svg";
import { Input } from "../../components/Form/input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const signInSchema = yup.object().shape({
  email: yup.string().required("Email obrigatorio").email("email inválido"),
  password: yup.string().required("Senha Obrigatória"),
});

interface SignInData {
  email: string;
  password: string;
}

export const Login = () => {
  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = (data: SignInData) => console.log(data);

  return (
    <Flex
      alignItems="center"
      padding="10px 15px"
      color="white"
      height="99.999vh"
      bgGradient="linear(to-r, purple.800 65%, white 35%)"
    >
      <Flex
        w="100%"
        justifyContent="center"
        flexDirection="row"
        alignItems="center"
      >
        <Grid w="100%" paddingRight="100px">
          <Image src={LogoSecundary} alt="doit" boxSize="120px" />
          <Heading as="h1">O jeito facil, grátis</Heading>
          <Text>
            Flexivel e atrativo de gerenciar
            <b>seus projetos em uma única plataforma</b>
          </Text>
        </Grid>
        <Grid
          onSubmit={handleSubmit(handleSignIn)}
          as="form"
          mt="4"
          w="100%"
          padding="30px 15px"
          border="3px solid"
          borderColor="gray.100"
          bg="white"
          color="gray.900"
        >
          <Heading size="lg"> Bem vindo de Volta!</Heading>
          <VStack mt="4" spacing="5">
            <Box>
              <Input
                placeholder="Digite o seu Login"
                icon={FaEnvelope}
                label="Login"
                type="email"
                error={errors.email}
                {...register("email")}
              />
              {!errors.email && (
                <Text ml="1" mt="1" color="gray.300">
                  Exemplo: nome@email.com
                </Text>
              )}
            </Box>

            <Input
              placeholder="Digite a sua Senha"
              icon={FaLock}
              label="Senha"
              type="password"
              error={errors.password}
              {...register("password")}
            />
          </VStack>

          <VStack mt="4" spacing="5">
            <Button
              isLoading={loading}
              bg="purple.800"
              w="100%"
              color="white"
              h="60px"
              borderRadius="8px"
              _hover={{
                backgroud: "purple.900",
              }}
              type="submit"
            >
              Entrar
            </Button>
            <Text>Ainda não possui uma conta?</Text>
            <Button
              bg="gray.100"
              w="100%"
              color="gray.300"
              h="60px"
              borderRadius="8px"
              _hover={{
                backgroud: "gray.200",
              }}
            >
              Cadastrar
            </Button>
          </VStack>
        </Grid>
      </Flex>
    </Flex>
  );
};
