import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";

/**
 * CTA Section - Call to Action
 *
 * Seção final de conversão com imagem de fundo
 * Incentiva o usuário a entrar em contato
 */

const CTASection = () => {
  const handleContactClick = () => {
    // Implementar redirecionamento para WhatsApp ou formulário de contato
    window.open("https://wa.me/555192899662", "_blank");
  };

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 10, md: 15 },
        backgroundImage:
          "url(https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: { xs: "scroll", md: "fixed" },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(47, 93, 80, 0.85)", // Overlay escuro com cor primary
        },
      }}
      id="contact"
    >
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: 600,
            }}
          >
            Precisa de apoio ambiental para seu projeto?
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: { xs: "1.125rem", md: "1.25rem" },
              maxWidth: 600,
            }}
          >
            Fale com a Preserve e tenha segurança técnica do início ao fim.
            Estamos prontas para transformar desafios ambientais em soluções
            sustentáveis.
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={handleContactClick}
            sx={{
              backgroundColor: "cta.main",
              color: "white",
              fontSize: "1.125rem",
              py: 2,
              px: 5,
              mt: 2,
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
              "&:hover": {
                backgroundColor: "#347768",
                transform: "translateY(-4px)",
                boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
              },
            }}
          >
            Entrar em contato agora
          </Button>

          {/* Informações adicionais de contato */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            sx={{
              mt: 4,
              pt: 4,
              borderTop: "1px solid rgba(255, 255, 255, 0.2)",
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <Typography variant="body2">📍 Gramado Xavier/RS</Typography>
            <Typography variant="body2">
              📧 preserveconsultoria.amb@gmail.com
            </Typography>
            <Typography variant="body2">📱 WhatsApp disponível</Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default CTASection;
