# PM Roles – Vite + React (TypeScript)

A simple website that explains common roles in project management with search and detail views.

## Scripts

```bash
# install deps
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview production build
npm run preview
```

## Structure

- `src/data/roles.ts`: roles dataset
- `src/pages/RolesIndex.tsx`: searchable list of roles
- `src/pages/RoleDetail.tsx`: role detail page
- `src/components/RoleCard.tsx`: role summary card

## Notes

- Routing powered by `react-router-dom@6`
- Content references PMBOK and common industry sources
