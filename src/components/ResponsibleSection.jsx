import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
} from "@mui/material";
import { School, Verified, Work, EmojiNature } from "@mui/icons-material";

/**
 * Responsible Section - Seção das Responsáveis Técnicas
 *
 * Apresenta as responsáveis técnicas ambientais
 * Prova de autoridade com credenciais profissionais
 */

const biologists = [
  {
    name: "Dra. Ana Paula Silva",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    degree: "Bióloga",
    registration: "CRBio 00000/00-D",
    experience: "+10 anos de experiência",
    specialty: "Especialista em licenciamento e regularização ambiental",
  },
  {
    name: "Dra. Maria Fernanda Costa",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    degree: "Bióloga",
    registration: "CRBio 00000/00-D",
    experience: "+8 anos de experiência",
    specialty: "Especialista em estudos de fauna e flora",
  },
];

const ResponsibleSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "background.default",
      }}
      id="responsible"
    >
      <Container maxWidth="lg">
        <Stack spacing={6} alignItems="center">
          {/* Título da seção */}
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
              Responsáveis técnicas
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Profissionais habilitadas e experientes em consultoria ambiental
            </Typography>
          </Stack>

          {/* Grid com as biólogas */}
          <Grid container spacing={4} justifyContent="center">
            {biologists.map((biologist, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  elevation={3}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 32px rgba(47, 93, 80, 0.25)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      p: 4,
                    }}
                  >
                    {/* Avatar */}
                    <Avatar
                      src={biologist.image}
                      alt={biologist.name}
                      sx={{
                        width: { xs: 150, md: 180 },
                        height: { xs: 150, md: 180 },
                        border: "5px solid",
                        borderColor: "secondary.main",
                        boxShadow: "0 8px 24px rgba(47, 93, 80, 0.2)",
                        mb: 3,
                      }}
                    />

                    {/* Nome */}
                    <Typography
                      variant="h3"
                      color="secondary.main"
                      sx={{
                        fontWeight: 600,
                        textAlign: "center",
                        mb: 3,
                      }}
                    >
                      {biologist.name}
                    </Typography>

                    {/* Credenciais */}
                    <List sx={{ width: "100%" }}>
                      <ListItem sx={{ px: 0, py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          <School
                            sx={{ color: "primary.main", fontSize: 24 }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={biologist.degree}
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "text.primary",
                            fontWeight: 500,
                          }}
                        />
                      </ListItem>

                      <ListItem sx={{ px: 0, py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          <Verified
                            sx={{ color: "primary.main", fontSize: 24 }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={biologist.registration}
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "text.primary",
                            fontWeight: 500,
                          }}
                        />
                      </ListItem>

                      <ListItem sx={{ px: 0, py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          <Work sx={{ color: "primary.main", fontSize: 24 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={biologist.experience}
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "text.primary",
                            fontWeight: 500,
                          }}
                        />
                      </ListItem>

                      <ListItem sx={{ px: 0, py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          <EmojiNature
                            sx={{ color: "primary.main", fontSize: 24 }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={biologist.specialty}
                          primaryTypographyProps={{
                            variant: "body1",
                            color: "text.primary",
                            fontWeight: 500,
                          }}
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Texto final institucional */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              maxWidth: "800px",
              textAlign: "center",
              fontStyle: "italic",
              lineHeight: 1.6,
              borderLeft: "3px solid",
              borderColor: "secondary.main",
              pl: 2,
            }}
          >
            Todos os projetos são acompanhados por responsáveis técnicas
            habilitadas, garantindo segurança e conformidade ambiental.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default ResponsibleSection;
