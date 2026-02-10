# 🚀 Guia de Deploy - GitHub Pages

## ✅ Configurações Realizadas

1. ✅ **vite.config.js** - Configurado base URL `/preserve/`
2. ✅ **package.json** - Adicionados scripts de deploy
3. ✅ **gh-pages** - Instalado como dependência
4. ✅ **GitHub Actions** - Workflow criado para deploy automático
5. ✅ **Build testado** - Funcionando perfeitamente

---

## 📋 Opções de Deploy

### **OPÇÃO 1: Deploy Automático (Recomendado)**

O deploy acontecerá automaticamente a cada push na branch principal.

**Passo 1:** Configure o GitHub Pages no repositório
```bash
# Acesse: https://github.com/robertoedu/preserve/settings/pages
# Em "Source", selecione: GitHub Actions
```

**Passo 2:** Faça commit e push das alterações
```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

**Passo 3:** Aguarde o deploy (2-3 minutos)
- Acompanhe em: https://github.com/robertoedu/preserve/actions
- Site estará disponível em: **https://robertoedu.github.io/preserve/**

---

### **OPÇÃO 2: Deploy Manual**

Use este comando sempre que quiser fazer deploy:

```bash
npm run deploy
```

Este comando:
1. Faz build do projeto (`npm run build`)
2. Cria/atualiza a branch `gh-pages`
3. Publica no GitHub Pages

**Importante:** Configure o GitHub Pages para usar a branch `gh-pages`:
- Acesse: https://github.com/robertoedu/preserve/settings/pages
- Em "Source", selecione: Deploy from a branch
- Branch: `gh-pages` / `/ (root)`

---

## 🌐 URL do Site

Após o deploy, seu site estará disponível em:

**https://robertoedu.github.io/preserve/**

---

## 🔧 Comandos Disponíveis

```bash
# Desenvolvimento local
npm run dev

# Build de produção
npm run build

# Preview do build local
npm run preview

# Deploy manual
npm run deploy
```

---

## 📱 Testando Localmente

Antes de fazer deploy, teste o build:

```bash
npm run build
npm run preview
```

O preview mostra exatamente como ficará no GitHub Pages.

---

## ⚠️ Troubleshooting

### Erro 404 nas rotas
✅ Já configurado! O `base: '/preserve/'` no vite.config.js resolve isso.

### Imagens não carregam
✅ Todas as imagens estão usando URLs externas (Unsplash), funcionará normalmente.

### Deploy não acontece
1. Verifique se o GitHub Actions está habilitado no repositório
2. Confirme que tem permissões de escrita
3. Veja os logs em: https://github.com/robertoedu/preserve/actions

---

## 🎯 Próximos Passos

1. **Commit das alterações:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages"
   git push origin main
   ```

2. **Configure GitHub Pages:**
   - Vá em Settings → Pages
   - Selecione "GitHub Actions" como source

3. **Aguarde o deploy automático**
   - Acompanhe em Actions
   - Site estará online em 2-3 minutos

4. **Acesse seu site:**
   - https://robertoedu.github.io/preserve/

---

## 📝 Atualizações Futuras

Para atualizar o site:

1. Faça as alterações no código
2. Commit e push para a branch main
3. O GitHub Actions fará deploy automaticamente

Ou use: `npm run deploy` para deploy manual imediato.

---

**🎉 Projeto pronto para publicação!**
