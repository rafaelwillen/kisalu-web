import { getProviderById } from "@/api/provider";
import Container from "@/components/common/Container";
import UserReviews from "@/components/common/UserReviews";
import { SingleProviderProvider } from "@/context/SingleProviderContext";
import { Routes } from "@/utils/constants/routes";
import { calculateMeanReviews } from "@/utils/reviews";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BasicPortfolio from "./_components/BasicPortfolio";
import ProviderDescription from "./_components/ProviderDescription";
import QuickInfo from "./_components/QuickInfo";
import SingleProviderBanner from "./_components/SingleProviderBanner";
import TrendingServices from "./_components/StaredServices";

type PageProps = {
  params: {
    id: string;
  };
};

// TODO: Add metadata
export const metadata: Metadata = {
  title: "",
};

export default async function ProviderProfilePage({
  params: { id },
}: PageProps) {
  const provider = await getProviderById(id);
  if (!provider) notFound();

  const {
    firstName,
    lastName,
    avatarImageURL,
    reviews,
    address,
    auth: { createdAt },
    services,
    providerActivities,
    biography,
    experienceInfo,
  } = provider;

  const fullName = `${firstName} ${lastName}`;
  const meanReview = calculateMeanReviews(reviews.map(({ rating }) => rating));
  const trendingServices = services
    .filter(({ isHighlighted }) => isHighlighted)
    .slice(0, 4);

  return (
    <SingleProviderProvider provider={provider}>
      <main className="py-10 lg:pt-0">
        <Container small>
          <section className="space-x-2 my-5 hidden lg:block text-text-200/60">
            <Link className="animated-underline dark" href={Routes.home}>
              Página Inicial
            </Link>
            <span>/</span>
            <Link className="animated-underline dark" href={Routes.providers}>
              Prestadores
            </Link>
            <span>/</span>
            <Link className="animated-underline dark text-text-200" href="#">
              {fullName}
            </Link>
          </section>
          <SingleProviderBanner
            createdAt={new Date(createdAt)}
            avatarImageURL={avatarImageURL}
            fullName={fullName}
            meanReview={meanReview}
            numberOfReviews={reviews.length}
            address={{
              county: address.county,
              province: address.province,
            }}
          />
          <div className="block xl:hidden">
            <QuickInfo
              successRate={0}
              numberOfServices={services.length}
              finishedServices={providerActivities.length}
            />
            <ProviderDescription description={biography} />
            <BasicPortfolio experience={experienceInfo} />
            <TrendingServices services={trendingServices} providerId={id} />
            <UserReviews reviews={reviews} />
          </div>
          <div className="hidden xl:grid grid-cols-[auto,35%] gap-8">
            <div>
              <ProviderDescription description={biography} />
              <BasicPortfolio experience={experienceInfo} />
              <TrendingServices services={trendingServices} providerId={id} />
              <UserReviews reviews={reviews} />
            </div>
            <aside className="-mt-16 z-20 mr-9 space-y-4">
              {/* <ContactMe /> */}
              <div className="p-8 bg-white rounded-xl shadow-md">
                <QuickInfo
                  successRate={0}
                  numberOfServices={services.length}
                  finishedServices={providerActivities.length}
                />
              </div>
            </aside>
          </div>
        </Container>
      </main>
    </SingleProviderProvider>
  );
}
