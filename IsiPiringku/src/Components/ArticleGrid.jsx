import React from "react";
import ArticleCard from "./ArticleCard";
import { Icon } from "@iconify/react";

const ArticleGrid = () => {
	const topArticles = [
		{
			id: 1,
			title: "Ini Kebutuhan Gizi Bayi Usia 0–12 Bulan yang Perlu Dicukupi",
			image: "/img/bayi.jpg",
			span: "row-span-2 col-span-4",
		},
		{
			id: 2,
			title: "Kebutuhan Gizi Ibu Hamil dan Janin, Nutrisi Apa Saja yang Dibutuhkan?",
			image: "/img/ibu-hamil.jpg",
			span: "col-span-4",
		},
		{
			id: 3,
			title: "Gizi Anak yang Harus Dipenuhi saat MPASI",
			image: "/img/mpasi.jpg",
			span: "col-span-2",
		},
		{
			id: 4,
			title: "7 Nutrisi Ibu Hamil yang Perlu Dipenuhi",
			image: "/img/nutrisi-hamil.jpg",
			span: "col-span-2",
		},
	];

	const bottomArticles = [
		{
			id: 5,
			title: "Nutrisi, Pengertian dan Jenis-Jenisnya yang Perlu Diketahui",
			description:
				"Secara umum, nutrisi terbagi menjadi dua jenis, yaitu makro dan mikro...",
			image: "/img/nutrisi.jpg",
		},
		{
			id: 6,
			title: "Kebutuhan Nutrisi Ibu Hamil Terpenuhi, Kehamilan Pasti Lancar",
			description:
				"Banyak ibu mengatakan kehamilan menyenangkan sekaligus menegangkan...",
			image: "/img/hamil-lancar.jpg",
		},
		{
			id: 7,
			title: "Kebutuhan Nutrisi Ibu Hamil Terpenuhi, Kehamilan Pasti Lancar",
			description:
				"Ibu hamil harus jaga kesehatan dirinya dan janinnya secara menyeluruh...",
			image: "/img/hamil-sehat.jpg",
		},
	];

	return (
		<div>
			{/* === Grid Atas === */}
			<div className="relative mb-12">
				<button className="hidden md:block absolute top-1/2 -translate-y-1/2 z-10 left-[-16px] lg:left-[-40px]">
					<Icon
						icon="mdi:chevron-left"
						width="28"
						height="28"
						color="black"
					/>
				</button>
				<div className="px-4 sm:px-7 md:px-4 lg:px-1">
					{/* Grid untuk desktop */}
					<div className="hidden md:grid grid-cols-8 grid-rows-2 gap-4 h-[500px] mw-full mx-auto">
						{topArticles.map((article) => (
							<ArticleCard
								key={article.id}
								id={article.id}
								title={article.title}
								image={article.image}
								className={article.span}
							/>
						))}
					</div>

					{/* Grid untuk mobile (tanpa span, 2 kolom) */}
					<div className="grid md:hidden grid-cols-1 sm:grid-cols-2 gap-4">
						{topArticles.map((article) => (
							<ArticleCard
								key={article.id}
								id={article.id}
								title={article.title}
								image={article.image}
								className="h-[200px] sm:h-[220px]" // tinggi bisa kamu sesuaikan
							/>
						))}
					</div>
				</div>

				<button className="hidden md:block absolute top-1/2 -translate-y-1/2 z-10 right-[-16px] lg:right-[-40px]">
					<Icon
						icon="mdi:chevron-right"
						width="28"
						height="28"
						color="black"
					/>
				</button>
			</div>

			{/* === Grid Bawah === */}
			<div className="relative">
				<button className="hidden md:block absolute top-1/2 -translate-y-1/2 z-10 left-[-16px] lg:left-[-40px]">
					<Icon
						icon="mdi:chevron-left"
						width="28"
						height="28"
						color="black"
					/>
				</button>

				<div className="px-4 sm:px-7 md:px-4 lg:px-1">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-full mx-auto">
						{bottomArticles.map((article) => (
							<ArticleCard
								key={article.id}
								id={article.id}
								title={article.title}
								description={article.description}
								image={article.image}
								className="h-[280px]"
							/>
						))}
					</div>
				</div>

				<button className="hidden md:block absolute top-1/2 -translate-y-1/2 z-10 right-[-16px] md:right-[-20px] lg:right-[-40px]">
					<Icon
						icon="mdi:chevron-right"
						width="28"
						height="28"
						color="black"
					/>
				</button>
			</div>
		</div>
	);
};

export default ArticleGrid;
