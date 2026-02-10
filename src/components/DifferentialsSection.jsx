import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

/**
 * Differentials Section - Seção de diferenciais
 * 
 * Destaca os principais diferenciais da Preserve
 * Fundo em verde escuro com texto claro para criar contraste
 */

const differentials = [
  'Atendimento próximo e humanizado',
  'Soluções ambientais responsáveis',
  'Conhecimento técnico atualizado',
  'Compromisso real com o meio ambiente',
  'Atuação em Gramado Xavier/RS e região',
];

const DifferentialsSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'primary.main',
        color: 'white',
      }}
      id="differentials"
    >
      <Container maxWidth="md">
        <Stack spacing={5} alignItems="center">
          {/* Título da seção */}
          <Typography
            variant="h2"
            color="inherit"
            textAlign="center"
            sx={{
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                backgroundColor: 'secondary.main',
                borderRadius: 2,
              },
            }}
          >
            Por que escolher a Preserve?
          </Typography>

          {/* Lista de diferenciais */}
          <List
            sx={{
              width: '100%',
              maxWidth: 600,
            }}
          >
            {differentials.map((differential, index) => (
              <ListItem
                key={index}
                sx={{
                  py: 2,
                  animation: `fadeInLeft 0.6s ease-out ${index * 0.1}s backwards`,
                  '@keyframes fadeInLeft': {
                    from: {
                      opacity: 0,
                      transform: 'translateX(-30px)',
                    },
                    to: {
                      opacity: 1,
                      transform: 'translateX(0)',
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 48,
                  }}
                >
                  <CheckCircle
                    sx={{
                      color: 'secondary.main',
                      fontSize: 32,
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={differential}
                  primaryTypographyProps={{
                    variant: 'h4',
                    color: 'inherit',
                    sx: {
                      fontSize: { xs: '1.125rem', md: '1.25rem' },
                      fontWeight: 500,
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>

          {/* Texto complementar */}
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: 700,
              mt: 4,
              p: 3,
              borderTop: '2px solid',
              borderColor: 'rgba(255, 255, 255, 0.2)',
            }}
          >
            <Typography variant="body1" color="inherit" sx={{ fontWeight: 300 }}>
              Mais do que uma consultoria, somos parceiras do seu projeto.
              Trabalhamos com transparência, dedicação e respeito ao meio ambiente.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default DifferentialsSection;
