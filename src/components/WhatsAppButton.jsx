import React from "react";
import { Fab, Tooltip, Badge } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

/**
 * WhatsApp Button - Botão Flutuante do WhatsApp
 *
 * Botão fixo no canto inferior direito da tela
 * Abre conversa direta no WhatsApp ao clicar
 */

const WhatsAppButton = () => {
  // Número de telefone (formato: código do país + DDD + número sem espaços ou caracteres especiais)
  const phoneNumber = "5551999999999"; // Substitua pelo número real
  const message =
    "Olá! Gostaria de saber mais sobre os serviços da Preserve Consultoria Ambiental.";

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Tooltip title="Fale conosco no WhatsApp" placement="left" arrow>
      <Badge
        badgeContent={1}
        color="error"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          position: "fixed",
          bottom: { xs: 20, md: 32 },
          right: { xs: 20, md: 32 },
          zIndex: 1000,
          "& .MuiBadge-badge": {
            fontSize: "0.75rem",
            height: "20px",
            minWidth: "20px",
            borderRadius: "10px",
            border: "2px solid white",
            top: "-8px",
            right: "-10px",
            animation: "badge-pulse 2s infinite",
          },
          "@keyframes badge-pulse": {
            "0%": {
              transform: "scale(1)",
            },
            "50%": {
              transform: "scale(1.1)",
            },
            "100%": {
              transform: "scale(1)",
            },
          },
        }}
      >
        <Fab
          color="success"
          aria-label="WhatsApp"
          onClick={handleClick}
          sx={{
            width: { xs: 56, md: 64 },
            height: { xs: 56, md: 64 },
            backgroundColor: "#25D366",
            color: "white",
            boxShadow: "0 4px 12px rgba(37, 211, 102, 0.4)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#20BA5A",
              transform: "scale(1.1)",
              boxShadow: "0 6px 20px rgba(37, 211, 102, 0.6)",
            },
            "&:active": {
              transform: "scale(0.95)",
            },
            animation: "pulse 2s infinite",
            "@keyframes pulse": {
              "0%": {
                boxShadow: "0 4px 12px rgba(37, 211, 102, 0.4)",
              },
              "50%": {
                boxShadow: "0 4px 20px rgba(37, 211, 102, 0.7)",
              },
              "100%": {
                boxShadow: "0 4px 12px rgba(37, 211, 102, 0.4)",
              },
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
        </Fab>
      </Badge>
    </Tooltip>
  );
};

export default WhatsAppButton;
