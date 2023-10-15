export function getReviewNote(meanReview: number) {
  const reviewTitles: Record<number, string> = {
    0: "Não Avaliado",
    1: "Péssimo",
    2: "Ruim",
    3: "Regular",
    4: "Bom",
    5: "Excelente",
  };
  return reviewTitles[Math.ceil(meanReview)] ?? reviewTitles[0];
}

export function calculateMeanReviews(reviews: number[]) {
  const mean = reviews.reduce((prev, curr) => prev + curr, 0) / reviews.length;
  return Number.isNaN(mean) ? 0 : mean;
}

export function groupReviews(reviews: number[]) {
  const groupedReviews = reviews.reduce<Record<number, number>>((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  for (let i = 1; i <= 5; i++) {
    if (!(i in groupedReviews)) groupedReviews[i] = 0;
  }
  return Object.entries(groupedReviews);
}
