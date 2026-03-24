import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import { Instagram, Email, Phone } from "@mui/icons-material";

/**
 * Footer - Rodapé da landing page
 *
 * Informações de contato, redes sociais e copyright
 * Fundo em verde escuro
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          {/* Linha principal */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            justifyContent="space-between"
            alignItems={{ xs: "center", md: "flex-start" }}
            textAlign={{ xs: "center", md: "left" }}
          >
            {/* Informações da empresa */}
            <Stack spacing={2} maxWidth={400}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  color: "secondary.main",
                }}
              >
                Preserve
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                Consultoria Ambiental
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255, 255, 255, 0.7)" }}
              >
                Soluções ambientais com propósito, técnica e responsabilidade.
                Atuação em Gramado Xavier/RS e região.
              </Typography>
            </Stack>

            {/* Contato */}
            <Stack spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
                Contato
              </Typography>

              <Stack spacing={1}>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  📍 Gramado Xavier/RS
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  📧 preserveconsultoria.amb@gmail.com
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  📱 (51) 99999-9999
                </Typography>
              </Stack>
            </Stack>

            {/* Redes sociais */}
            <Stack spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
                Redes Sociais
              </Typography>

              <Stack direction="row" spacing={1}>
                <IconButton
                  component="a"
                  href="https://www.instagram.com/preserve_consultoria_amb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    "&:hover": {
                      backgroundColor: "secondary.main",
                      transform: "translateY(-4px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <Instagram />
                </IconButton>

                <IconButton
                  component="a"
                  href="mailto:preserveconsultoria.amb@gmail.com"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    "&:hover": {
                      backgroundColor: "secondary.main",
                      transform: "translateY(-4px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <Email />
                </IconButton>

                <IconButton
                  component="a"
                  href="https://wa.me/555192899662"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    "&:hover": {
                      backgroundColor: "secondary.main",
                      transform: "translateY(-4px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <Phone />
                </IconButton>
              </Stack>

              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "0.875rem",
                }}
              >
                @preserve_consultoria_amb
              </Typography>
            </Stack>
          </Stack>

          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)", my: 2 }} />

          {/* Copyright */}
          <Typography
            variant="body2"
            textAlign="center"
            sx={{
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "0.875rem",
            }}
          >
            © {currentYear} Preserve - Consultoria Ambiental. Todos os direitos
            reservados.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
