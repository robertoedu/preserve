import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import {
  Description,
  Assignment,
  Science,
  CheckCircle,
  Business,
  Handshake,
} from "@mui/icons-material";

/**
 * Services Section - Seção de serviços
 *
 * Apresenta os principais serviços da consultoria em cards responsivos
 * Cada card possui ícone, título e efeito hover
 */

const services = [
  {
    icon: <Description sx={{ fontSize: 50 }} />,
    title: "Licenças Ambientais",
    description:
      "Obtenção e renovação de licenças necessárias para operação legal e sustentável.",
  },
  {
    icon: <Assignment sx={{ fontSize: 50 }} />,
    title: "Laudos Ambientais",
    description:
      "Documentos técnicos detalhados para avaliação de impactos e conformidade.",
  },
  {
    icon: <Science sx={{ fontSize: 50 }} />,
    title: "Estudos Ambientais",
    description:
      "Análises aprofundadas de fauna, flora, recursos hídricos e impactos ambientais.",
  },
  {
    icon: <CheckCircle sx={{ fontSize: 50 }} />,
    title: "Regularização Ambiental",
    description:
      "Adequação de propriedades e empreendimentos à legislação ambiental vigente.",
  },
  {
    icon: <Business sx={{ fontSize: 50 }} />,
    title: "Consultoria Técnica",
    description:
      "Orientação especializada para tomada de decisões ambientalmente responsáveis.",
  },
  {
    icon: <Handshake sx={{ fontSize: 50 }} />,
    title: "Apoio a Empresas e Produtores",
    description:
      "Suporte contínuo para gestão ambiental eficiente e sustentável.",
  },
];

const ServicesSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "background.default",
      }}
      id="services"
    >
      <Container maxWidth="lg">
        <Stack spacing={6} alignItems="center">
          {/* Cabeçalho da seção */}
          <Stack spacing={2} textAlign="center" maxWidth="800px">
            <Typography variant="h2" color="primary">
              Nossos serviços
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Soluções responsáveis e eficientes para cada etapa do seu projeto.
              Atuamos com excelência técnica e compromisso ambiental.
            </Typography>
          </Stack>

          {/* Cards de serviços */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              justifyContent: "center",
              width: "100%",
            }}
          >
            {services.map((service, index) => (
              <Box
                key={index}
                sx={{
                  flex: "1 1 100%",
                  maxWidth: {
                    xs: "100%",
                    sm: "calc(50% - 16px)",
                    md: "calc(33.333% - 22px)",
                  },
                  display: "flex",
                }}
              >
                <Card
                  elevation={2}
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 24px rgba(47, 93, 80, 0.2)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      p: 4,
                    }}
                  >
                    <Box
                      sx={{
                        color: "secondary.main",
                        mb: 2,
                        p: 2,
                        borderRadius: "50%",
                        backgroundColor: "rgba(95, 166, 139, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {service.icon}
                    </Box>

                    <Typography
                      variant="h4"
                      color="primary"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {service.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ServicesSection;
