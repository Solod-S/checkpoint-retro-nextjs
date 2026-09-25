import {
  Locale,
  PostKind,
  PostStatus,
  PrismaClient,
  TranslationStatus,
  UserRole,
} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "editor@example.local" },
    update: {},
    create: {
      email: "editor@example.local",
      name: "Checkpoint Editor",
      role: UserRole.ADMIN,
    },
  });

  let author = await prisma.author.findUnique({
    where: { userId: user.id },
  });

  if (!author) {
    author = await prisma.author.create({
      data: {
        userId: user.id,
        translations: {
          create: [
            { locale: Locale.RU, slug: "checkpoint-editor", name: "Редактор Checkpoint" },
            { locale: Locale.UK, slug: "checkpoint-editor", name: "Редактор Checkpoint" },
            { locale: Locale.EN, slug: "checkpoint-editor", name: "Checkpoint Editor" },
          ],
        },
      },
    });
  }

  const existing = await prisma.postTranslation.findFirst({
    where: { locale: Locale.RU, slug: "primer-materiala" },
  });

  if (!existing) {
    await prisma.post.create({
      data: {
        kind: PostKind.ARTICLE,
        status: PostStatus.DRAFT,
        authorId: author.id,
        translations: {
          create: [
            {
              locale: Locale.RU,
              slug: "primer-materiala",
              title: "Пример материала",
              excerpt: "Fixture для локальной разработки.",
              content: { type: "doc", content: [] },
              translationStatus: TranslationStatus.DRAFT,
            },
            {
              locale: Locale.UK,
              slug: "pryklad-materialu",
              title: "Приклад матеріалу",
              excerpt: "Fixture для локальної розробки.",
              content: { type: "doc", content: [] },
              translationStatus: TranslationStatus.DRAFT,
            },
            {
              locale: Locale.EN,
              slug: "sample-story",
              title: "Sample story",
              excerpt: "Local development fixture.",
              content: { type: "doc", content: [] },
              translationStatus: TranslationStatus.DRAFT,
            },
          ],
        },
      },
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
