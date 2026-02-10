import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import { Warning, ReportProblem, Gavel } from "@mui/icons-material";

/**
 * Mistakes Section - Seção de erros comuns
 *
 * Educa o visitante sobre erros comuns no licenciamento ambiental
 * Demonstra expertise técnica e reduz risco percebido
 */

const mistakes = [
  {
    icon: <ReportProblem sx={{ fontSize: 50 }} />,
    title: "Documentação incompleta",
    description: "Erros na documentação geram atrasos e exigências adicionais.",
  },
  {
    icon: <Warning sx={{ fontSize: 50 }} />,
    title: "Ignorar exigências locais",
    description: "Cada município possui regras ambientais específicas.",
  },
  {
    icon: <Gavel sx={{ fontSize: 50 }} />,
    title: "Iniciar obra sem licença",
    description: "Pode resultar em multas e embargo da atividade.",
  },
];

const MistakesSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#ffffff",
      }}
      id="mistakes"
    >
      <Container maxWidth="lg">
        <Stack spacing={6} alignItems="center">
          {/* Cabeçalho da seção */}
          <Stack spacing={2} textAlign="center" maxWidth="800px">
            <Typography
              variant="h2"
              color="primary"
              sx={{
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -8,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 60,
                  height: 4,
                  backgroundColor: "secondary.main",
                  borderRadius: 2,
                },
              }}
            >
              Erros comuns no licenciamento ambiental
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Muitos problemas ambientais surgem por falta de orientação técnica
              adequada.
            </Typography>
          </Stack>

          {/* Flex de cards */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              justifyContent: "center",
              width: "100%",
            }}
          >
            {mistakes.map((mistake, index) => (
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
                    border: "2px solid",
                    borderColor: "rgba(255, 152, 0, 0.2)",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 24px rgba(255, 152, 0, 0.15)",
                      borderColor: "rgba(255, 152, 0, 0.4)",
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
                        color: "#FF9800",
                        mb: 2,
                        p: 2,
                        borderRadius: "50%",
                        backgroundColor: "rgba(255, 152, 0, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {mistake.icon}
                    </Box>

                    <Typography
                      variant="h4"
                      color="primary"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {mistake.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {mistake.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>

          {/* Texto de fechamento */}
          <Box
            sx={{
              maxWidth: "900px",
              textAlign: "center",
              mt: 4,
              p: 4,
              borderRadius: 2,
              backgroundColor: "rgba(95, 166, 139, 0.08)",
              border: "1px solid",
              borderColor: "secondary.main",
            }}
          >
            <Typography
              variant="body1"
              color="text.primary"
              sx={{
                fontWeight: 500,
                lineHeight: 1.7,
              }}
            >
              A Preserve orienta cada etapa do processo para evitar riscos e
              garantir segurança ambiental ao seu projeto.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default MistakesSection;
