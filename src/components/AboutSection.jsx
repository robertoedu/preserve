import React from "react";
import { Box, Container, Grid, Typography, Stack, Avatar } from "@mui/material";

/**
 * About Section - Seção "Quem somos"
 *
 * Apresenta a história e propósito da empresa
 * Layout com imagens circulares das fundadoras e texto institucional
 */

const AboutSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#ffffff",
      }}
      id="about"
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Coluna de imagens */}
          <Grid item xs={12} md={5}>
            <Stack
              spacing={3}
              alignItems="center"
              sx={{
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  src="/Nadiesca.jpg"
                  alt="Nadiesca "
                  sx={{
                    width: { xs: 150, md: 180 },
                    height: { xs: 150, md: 180 },
                    border: "4px solid",
                    borderColor: "secondary.main",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  }}
                />
                <Avatar
                  src="/Dariane.png"
                  alt="Dariane Severgnini"
                  sx={{
                    width: { xs: 150, md: 180 },
                    height: { xs: 150, md: 180 },
                    border: "4px solid",
                    borderColor: "primary.main",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  }}
                />
              </Box>

              {/* Elemento decorativo */}
              <Box
                sx={{
                  width: 100,
                  height: 4,
                  backgroundColor: "secondary.main",
                  borderRadius: 2,
                  mt: 2,
                }}
              />
            </Stack>
          </Grid>

          {/* Coluna de texto */}
          <Grid item xs={12} md={7}>
            <Stack spacing={3}>
              <Typography variant="h2" color="primary">
                Quem somos
              </Typography>

              <Typography variant="body1" color="text.primary" paragraph>
                A <strong>Preserve – Consultoria Ambiental</strong> nasceu de
                uma amizade de anos e do amor em comum pela natureza. Somos duas
                amigas de infância que transformaram a paixão pelo meio ambiente
                em um negócio com propósito real.
              </Typography>

              <Typography variant="body1" color="text.primary" paragraph>
                Ao longo da nossa trajetória, seguimos caminhos acadêmicos
                complementares: uma na área de Ciências Biológicas e a outra em
                Engenharia Ambiental. Essa união de conhecimentos fortaleceu
                ainda mais nosso propósito de atuar em prol da preservação
                ambiental. Então, decidimos unir nossas experiências
                profissionais para criar uma consultoria que oferece soluções
                técnicas de excelência com um atendimento próximo e humano.
              </Typography>

              <Typography variant="body1" color="text.primary" paragraph>
                Atuamos em <strong>Gramado Xavier/RS e região</strong>, com
                conhecimento técnico atualizado e compromisso genuíno com cada
                projeto. Para nós, cada licença, laudo ou estudo não é apenas um
                documento — é uma oportunidade de fazer a diferença para o meio
                ambiente e para quem confia em nosso trabalho.
              </Typography>

              <Box
                sx={{
                  p: 3,
                  backgroundColor: "background.default",
                  borderLeft: "4px solid",
                  borderColor: "secondary.main",
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="body1"
                  color="primary"
                  sx={{ fontStyle: "italic", fontWeight: 500 }}
                >
                  "Nascemos da amizade, crescemos com propósito e trabalhamos
                  com responsabilidade."
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
