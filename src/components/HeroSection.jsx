import React from "react";
import { Box, Container, Grid, Typography, Button, Stack } from "@mui/material";

/**
 * Hero Section - Seção principal da landing page
 *
 * Apresenta a proposta de valor da empresa de forma clara e atrativa
 * Layout responsivo com Grid: texto à esquerda, imagem à direita
 */

const HeroSection = () => {
  const handleContactClick = () => {
    // Implementar redirecionamento para WhatsApp ou formulário de contato
    window.open("https://wa.me/555192899662", "_blank");
  };

  const handleServicesClick = () => {
    // Scroll suave para seção de serviços
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Coluna de texto */}
          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              <Typography
                variant="h1"
                color="primary"
                sx={{
                  animation: "fadeInUp 0.8s ease-out",
                  "@keyframes fadeInUp": {
                    from: {
                      opacity: 0,
                      transform: "translateY(30px)",
                    },
                    to: {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  },
                }}
              >
                Consultoria ambiental com propósito, técnica e responsabilidade
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  animation: "fadeInUp 0.8s ease-out 0.2s backwards",
                }}
              >
                Soluções ambientais eficientes, construídas a partir de uma
                história real de amizade e compromisso com a natureza.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{
                  animation: "fadeInUp 0.8s ease-out 0.4s backwards",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleContactClick}
                  sx={{
                    backgroundColor: "cta.main",
                    "&:hover": {
                      backgroundColor: "#347768",
                    },
                  }}
                >
                  Falar com uma consultora
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  onClick={handleServicesClick}
                >
                  Conhecer nossos serviços
                </Button>
              </Stack>
            </Stack>
          </Grid>

          {/* Coluna de imagem */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                height: { xs: 300, md: 500 },
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                animation: "fadeInRight 1s ease-out 0.3s backwards",
                "@keyframes fadeInRight": {
                  from: {
                    opacity: 0,
                    transform: "translateX(50px)",
                  },
                  to: {
                    opacity: 1,
                    transform: "translateX(0)",
                  },
                },
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
                alt="Natureza - Preserve Consultoria Ambiental"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
