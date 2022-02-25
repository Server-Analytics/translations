/**
 * Ce fichier à été généré pour la dernière fois le 24/02/2022 à 19:56:45 par le script de génération de fichier langue.
 * Si celui-ci ne comporte pas les textes des dernières versions, pensez à le régénérer, ou demandez à qqn d'autre de le faire (sur le salon "traductions" du serveur Discord).
 *
 * @version 1.0.0 - Version du générateur
 * @language en
 * @default fr
 */

module.exports = {
    infos: {
        public: true,
        language_code: "en",
        language_name: "English",
        language_flag: "🇬🇧",
        default: false
    },
    general: {
        months_list: {
            "1": [
                "january"
            ],
            "2": [
                "february"
            ],
            "3": [
                "march"
            ],
            "4": [
                "april"
            ],
            "5": [
                "may"
            ],
            "6": [
                "june"
            ],
            "7": [
                "july"
            ],
            "8": [
                "august"
            ],
            "9": [
                "september"
            ],
            "10": [
                "october"
            ],
            "11": [
                "november"
            ],
            "12": [
                "december"
            ]
        },
        time_formats: {
            "STANDARD SLASH + YEAR": "{DAY}/{MONTH}/{YEAR}",
            "STANDARD SLASH + YEAR HH:SS": "{DAY}/{MONTH}/{YEAR} à {HOUR}h{MINUTE}",
            "STANDARD FILE DATE": "{DAY}_{MONTH}_{YEAR}",
            "DD MONTH around HH": "{DAY} {MONTH} vers {HOUR}h",
            "DD MONTH at HH": "{DAY} {MONTH} à {HOUR}h",
            "DD MONTH": "{DAY} {MONTH}"
        },
        time_names: {
            days: [
                " day",
                " days",
                "d"
            ],
            hours: [
                " hour",
                " hours",
                "h"
            ],
            minutes: [
                " minute",
                " minutes",
                " min"
            ],
            seconds: [
                " second",
                " seconds",
                "s"
            ],
            weeks: [
                " week",
                " weeks",
                " w"
            ],
            months: [
                " month",
                " month",
                "m"
            ],
            years: [
                " year",
                " years",
                "y"
            ]
        }
    },
    help: {
        help_screen: {
            title: "Help page",
            description: "Thanks for using **{projectName}** v.**{version}** ! *You can check the latest patch notes, just by clicking [**here**]({lastPatchNoteLink}).*",
            fallback_message: "This category's empty :(",
            buttons: {
                website: "Website",
                support_server: "Support server",
                invite_bot: "Invite the bot"
            },
            categories: {
                STATS: "Statistics commands",
                SECONDARY_STATS: "Secondary commands",
                OTHER: "Other commands"
            }
        },
        commands: {
            graph: {
                short_description: "Generate a graph"
            },
            top: {
                short_description: "Show server rankings"
            },
            me: {
                short_description: "Show personal stats"
            },
            sync: {
                short_description: "Stats synchronization"
            },
            rawstats: {
                short_description: "Module and cache status"
            },
            botstats: {
                short_description: "Bot stats and infos"
            }
        }
    },
    graph: {
        errors: {
            fetch_error: "**Whoops!** The required data could not be retrieved to create a graph.. *If the problem happens again, please report the bug on the support server.*"
        },
        help_screen: {
            embed_title: "Créer un graphique",
            embed_description: "**Représentez** vos statistiques ou celles du serveur sous forme de graphiques. Commencez par choisir une **préconfiguration** :",
            image_title: "Graphiques",
            embed_field_server_graph: "Graphiques du serveur",
            embed_field_user_graph: "Graphique de vos stats",
            components_guild_graph_select_menu: "Choisir un graphique sur les stats du serveur..",
            components_user_graph_select_menu: "..ou un graphique avec vos statistiques !"
        },
        graph_main_screen: {
            advanced: {
                confirm_button: "Générer",
                advanced_button: "Options avancées",
                advanced_embed_description: "**Adaptez** et **personnalisez** l'interprétation et l'affichage de vos graphiques.",
                advanced_embed_options_field_title: "Options disponibles :",
                advanced_options: {
                    display_bar_chart: "Affichage en barres",
                    increment_stats: "Somme cumulative",
                    remove_inexistant_reports: "Retrait des rapports inexistants",
                    display_ticks: "Affichage des points",
                    group_values: "Groupement statistique"
                },
                timerange_select_menu: {
                    placeholder: "Choisir un intervalle de temps..",
                    option_title: "Affichage sur {timeRange}",
                    premium_only_description: "Premium uniquement"
                }
            },
            export: {
                export_button: "Export",
                export_done: "**Graph succesfully exported !** You can open the `.csv`  file with your favourite spreadsheet software.",
                export_software_import_tip: "When importing, we advise you to follow the **recommended configuration** to avoid interpretation problems :",
                export_config: [
                    [
                        "Character sets",
                        "UTF-8 / Unicode (UTF-8)"
                    ],
                    [
                        "Column separator",
                        "Comma (,)"
                    ],
                    [
                        "Line separator",
                        "Line break (\\n)"
                    ]
                ]
            }
        },
        graph_types: {
            server_messages: {
                title: "Messages Envoyés",
                description: "Graphique résumant l'activité par messages du serveur.",
                graph_name: "Résumé de l'activité par message"
            },
            server_voicetime: {
                title: "Temps passé en vocal",
                description: "Graphique résumant l'activité vocale du serveur.",
                graph_name: "Résumé de l'activité vocale"
            },
            server_members: {
                title: "Membres",
                description: "Graphique résumant le nombre de membres du serveur.",
                graph_name: "Résumé de l'évolution du nombre de membres"
            },
            server_deleted: {
                title: "Messages Supprimés",
                description: "Graphique résumant le montant de messages supprimés.",
                graph_name: "Résumé du nombre de messages supprimés"
            },
            server_reactions: {
                title: "Réactions",
                description: "Graphique résumant le nombre de réactions aux messages.",
                graph_name: "Résumé du nombre de réactions"
            },
            server_joined: {
                title: "Nouveaux membres",
                description: "Graphique résumant le nombre de nouveaux arrivants.",
                graph_name: "Résumé du nombre de nouveaux arrivants"
            },
            server_left: {
                title: "Départs",
                description: "Graphique résumant le nombre de membres ayant quitté.",
                graph_name: "Résumé du nombre de départs"
            },
            user_myMessages: {
                title: "Messages Envoyés",
                description: "Graphique résumant votre activité par messages.",
                graph_name: "Résumé de l'activité par message"
            },
            user_myVoicetime: {
                title: "Temps en vocal",
                description: "Graphique résumant votre activité vocale.",
                graph_name: "Résumé de l'activité vocale"
            },
            user_myReactedCount: {
                title: "Réactions données",
                description: "Graphique résumant le nombre de réactions données.",
                graph_name: "Résumé du nombre de réactions données"
            },
            user_myDeletedMessages: {
                title: "Messages Supprimés",
                description: "Graphique résumant votre montant de messages supprimés.",
                graph_name: "Résumé du nombre de messages supprimés"
            }
        }
    },
    top: {
        not_enough_data: "**Whoops!** I don't have enough data to make rankings for now.. *If the problem happens again, please report the bug on the support server.*",
        not_allowed_timerange: "**Whoops!** You can't choose a timerange longer than **{max}** days.",
        top_canvas_leaderboard_date: "Global rankings {date}",
        top_canvas_leaderboard_temp_date: "Global {type} from {date1} to {date2}",
        top_canvas_empty_username: "Nobody",
        top_canvas_not_found_username: "User not found",
        top_canvas_leaderboard_temp_types: {
            "0": "complets",
            "5": "partiels",
            "10": "schématiques"
        },
        pos_abbreviations: {
            "1": "st",
            "2": "nd",
            "3": "rd",
            other: "th"
        },
        stat_units: {
            messages: [
                "Messages",
                "messages"
            ],
            voice: [
                "Hours in vocal chats",
                "hours in vocal chats"
            ]
        },
        ready_to_use_timeranges: {
            image_title: "Timeranges",
            embed_title: "Select a timerange",
            embed_description: "Select a timerange for the ranking.",
            embed_data_FULL: "All data",
            embed_data_PARTIAL_5: "Partial data",
            embed_data_PARTIAL_10: "Schematic data",
            embed_data_partial_disclamer: "Pour limiter la saturation du bot, certains classements sont **partiels** ou **schématiques**, les stats y sont inexactes mais suffisantes pour déterminer les rangs.",
            embed_data_learn_more: "Find out more",
            components_days_acronym: "d"
        }
    },
    me: {
        errors: {
            cannot_fetch_user: "**Whoops!** Couldn't gather this user's data.. try again later !",
            data_flag_fetch_error: "**Whoops!** An error occured when gathering data for **DATA_FLAG** : `{flag}`."
        },
        card: {
            header_joined_at: "Joined on",
            header_created_at: "Created on",
            global_stats_messages: "Sent messages",
            global_stats_voice: "Hours in vocal chats",
            global_stats_leaderboard: "In rankings",
            buttons_edit: "Edit",
            units: {
                timeranges: [
                    "28d",
                    "7d",
                    "24h"
                ],
                messages: [
                    "message",
                    "messages"
                ],
                voice: [
                    "hour",
                    "hours"
                ],
                reactionsGiven: [
                    "reaction",
                    "reactions"
                ],
                deletedMessages: [
                    "message",
                    "messages"
                ]
            },
            elements: {
                messages: {
                    title: "Sent messages"
                },
                voice: {
                    title: "Time in vocal chats"
                },
                reactionsGiven: {
                    title: "Reactions"
                },
                involvement: {
                    title: "Engagement",
                    text: "Presence rate on the server/during the last month."
                },
                deletedMessages: {
                    title: "Deleted messages"
                },
                ranks: {
                    "messages-voice": {
                        title: "Activity Ranks",
                        names: {
                            X: "No data",
                            F: "Very inactive",
                            "F+": "Not very active",
                            "D-": "Not very active",
                            D: "Not very active",
                            "D+": "Not very active",
                            "C-": "Passively active",
                            C: "Passively active",
                            "C+": "Passively active",
                            "B-": "Rather active",
                            B: "Rather active",
                            "B+": "Active",
                            "A-": "Active",
                            A: "Very active",
                            "A+": "Extremely active"
                        }
                    }
                }
            }
        },
        edit: {
            errors: {
                SELECTED_LOCKED_CONTENT: "**Cette statistique est bloquée !** Pour l'utiliser, vous devez l'acheter ! *Pour cela, voici quelques étapes :*\n\n{emoji} **Se connecter au site :**\n> Rendez-vous sur note [site web]({link}), connectez-vous, puis en survolant votre avatar, cliquez sur *'Boutique'* et finalement, dans le menu latéral gauche, cliquez sur 'Boutique /me'.\n\n{emoji} **Acheter la statistique :**\n> Une fois dans la boutique /me, sélectionnez l'élément `{type}`, puis, à l'étape suivante, achetez la statistique `{content}` !"
            },
            agreement_message: "**Important : ** avant que vous ne puissiez modifier la disposition de votre carte, vous devez accepter à ce que nous enregistrions vos préférences sur *l'ensemble de vos serveurs*. Ces données ne seront **pas supprimées** si vous quittez ce serveur ou supprimez votre compte et seront **publiques**, d'où l'importance de ce message./Si vous **acceptez** la récolte et le stockage de ces données, appuyez sur le bouton **'Accepter'** ci-dessous.",
            agreement_confirm_button: "Accepter",
            agreement_reject_button: "Rejeter",
            agreement_reject_message: "**Nous n'enregistrerons pas vos préférences.**\n> Si vous avez davantage de questions sur la manière dont nous disposons de vos **données**, vous pouvez rejoindre notre **Serveur Discord**. *Autrement, si vous changez d'avis, vous pouvez retaper la commande !*",
            agreement_reject_easteregg_gif: "https://tenor.com/view/dujardin-jean-daccord-comme-ca-gif-10162502",
            main_embed_description: "**Modifiez** la disposition des éléments statistiques sur votre carte. *Sélectionnez un élément dans le menu déroulant pour le modifier !*",
            buttons_save: "Sauvegarder",
            main_embed_fields_name: "Ligne {n} :",
            main_embed_select_displayed: "Affiché :",
            main_embed_select_placeholder: "Sélectionner un élément",
            select_type_embed_description: "**Très bien !** Choisissez quel type d'élément afficher dans l'emplacement **#{n}**.",
            select_type_embed_cancelled: "**Temps mort !** La sélection de l'élément a été annulée.",
            select_content_description: "**Très bien !** Choisissez quel type de statistique vous souhaiteriez afficher dans la boîte `{name}`.",
            select_content_menu_locked_description: "Sélectionnez pour acheter cette statistique.",
            elements: {
                graph: {
                    title: "Graphique",
                    description: "Affiche un graphique."
                },
                percentage: {
                    title: "Pourcentage",
                    description: "Affiche un pourcentage + barre de progression."
                },
                ranks: {
                    title: "Rangs",
                    description: "Evaluation notée de F à A+."
                },
                timeranges: {
                    title: "Statistiques temporelles",
                    description: "Affiche une données sous 3 plages temporelles."
                }
            }
        }
    },
    botstats: {
        stat_type_select_placeholder: "Sélectionner une statistique",
        graph_init_at: "Gestionnaire statistique initialisé il y a {x} heures",
        stat_types: {
            commandCount: "Commandes exécutées",
            interactionCount: "Interactions reçues",
            messageCount: "Messages enregistrés",
            cachedGuildCount: "Serveurs en cache",
            cachedGuildMemberCount: "Membres en cache",
            cachedWebsiteUsersCount: "Utilisateurs en cache",
            ramUsage: "Utilisation de la RAM",
            databaseConnections: "Requêtes à la base de données"
        }
    },
    _FILE_UPDATES_INFO: {
        last_update_timestamp: 1645729005037,
        last_update_date: "24/02/2022",
        last_update_filegenerator_version: "1.0.0"
    }
}
