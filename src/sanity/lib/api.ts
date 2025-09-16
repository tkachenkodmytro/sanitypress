export const useCdn = false;
export const studioUrl = '/studio';

export const dataset = assertValue(
  'production',
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET',
);

export const projectId = assertValue(
  'ocuan7xe',
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
);

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-04-16';

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) { throw new Error(errorMessage) }
  return v
};