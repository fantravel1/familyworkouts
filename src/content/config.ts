import { defineCollection, z } from 'astro:content';

const workoutsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Core metadata
    title: z.string(),
    description: z.string().max(200),

    // Video
    youtubeId: z.string().optional(),
    thumbnailUrl: z.string().url().optional(),
    duration: z.number(), // minutes

    // Classification
    category: z.enum(['dance', 'yoga', 'hiit', 'strength', 'sports', 'outdoor', 'cultural', 'adaptive', 'games']),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),

    // Age appropriateness
    ageGroups: z.array(z.enum(['toddlers', 'preschool', 'kids', 'teens', 'adults', 'seniors'])),
    minAge: z.number().optional(),

    // Equipment
    equipment: z.array(z.string()).default([]),
    noEquipmentNeeded: z.boolean().default(true),

    // Workout details
    calories: z.number().optional(),
    muscleGroups: z.array(z.string()).optional(),
    intensity: z.enum(['low', 'moderate', 'high']).optional(),

    // Accessibility
    hasModifications: z.boolean().default(true),
    isAdaptive: z.boolean().default(false),

    // SEO
    keywords: z.array(z.string()).optional(),

    // Publishing
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    featured: z.boolean().default(false),

    // Related content
    relatedWorkouts: z.array(z.string()).optional(),

    // Localization
    language: z.string().default('en'),
  })
});

const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    category: z.enum(['getting-started', 'tips', 'nutrition', 'safety', 'age-specific']),
    readingTime: z.number(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('FamilyWorkouts Team'),
    featured: z.boolean().default(false),
    language: z.string().default('en'),
  })
});

const challengesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    duration: z.number(), // days
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    workoutSlugs: z.array(z.string()),
    rewards: z.array(z.string()).optional(),
    startDate: z.date().optional(),
    seasonal: z.boolean().default(false),
    language: z.string().default('en'),
  })
});

export const collections = {
  'workouts': workoutsCollection,
  'guides': guidesCollection,
  'challenges': challengesCollection,
};
