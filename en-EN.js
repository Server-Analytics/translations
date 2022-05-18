/**
 * Ce fichier à été généré pour la dernière fois le 18/05/2022 à 23:53:08 par le script de génération de fichier langue.
 * Si celui-ci ne comporte pas les textes des dernières versions, pensez à le régénérer, ou demandez à qqn d'autre de le faire (sur le salon "traductions" du serveur Discord).
 *
 * @version 1.0.1 - Version du générateur
 * @language en-EN
 * @default fr-FR
 */

module.exports = {
    infos: {
        public: true,
        language_code: "en-EN",
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
            "STANDARD SLASH + YEAR HH:SS": "{DAY}/{MONTH}/{YEAR} at {HOUR}h{MINUTE}",
            "STANDARD FILE DATE": "{DAY}_{MONTH}_{YEAR}",
            "DD MONTH around HH": "{DAY} {MONTH} around {HOUR}h",
            "DD MONTH at HH": "{DAY} {MONTH} at {HOUR}h",
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
        },
        errors: {
            bot_missing_permissions: "**Whoops!** Je n'ai pas les permissions suffisantes pour exécuter cette commande.\n> J'ai besoin de : {missingPermissions}",
            cmd_missing_permissions: "**Whoops!** Vous ne disposez pas des permissions nécessaires pour exécuter cette commande.\n> Il vous manque : {missingPermissions}",
            bot_unusable: "**Bot en maintenance !** {selfName} n'est pas disponible pour le moment. *Veuillez réessayer plus tard.*"
        },
        week_days_list: {
            "0": [
                "dimanche",
                "dim"
            ],
            "1": [
                "lundi",
                "lun"
            ],
            "2": [
                "mardi",
                "mar"
            ],
            "3": [
                "mercredi",
                "mer"
            ],
            "4": [
                "jeudi",
                "jeu"
            ],
            "5": [
                "vendredi",
                "ven"
            ],
            "6": [
                "samedi",
                "sam"
            ]
        },
        common: {
            go_back: "Retour",
            cancel: "Annuler",
            confirm: "Confirmer",
            retry: "Réessayer",
            get_premium: "Devenir Premium"
        },
        timerange_modal: {
            title: "Choisir un intervalle de temps",
            label: "Intervalle temporel (en jours) :",
            error_title: "Whoops !",
            error_not_number: "Vous n'avez pas entré un nombre valide.. *Exemple : `7`, `12`, `30`, etc.*",
            error_too_short: "L'intervalle temporel entré est trop court, *il doit être d'au moins `une semaine` !*",
            error_not_premium: "Pour accéder à vos statistiques au delà de `31` jours, vous devez être **premium**. *Utilisez la commande `/subscribe` pour en savoir plus !*",
            error_button_retry: "Réessayer"
        }
    },
    help: {
        help_screen: {
            title: "Help page",
            description: "Thanks for using **{projectName}** v.**{version}** ! *You can check the latest patch notes, just by clicking [**here**]({lastPatchNoteLink}).*",
            fallback_message: "This category is empty :(",
            buttons: {
                website: "Website",
                support_server: "Support server",
                invite_bot: "Invite the bot"
            },
            categories: {
                STATS: "Statistics commands",
                SECONDARY_STATS: "Secondary commands",
                OTHER: "Other commands"
            },
            premium_expires_in: "***Le premium** du serveur expire dans {days} jours.*"
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
            },
            lang: {
                short_description: "Change preferred language"
            },
            stats: {
                short_description: "Afficher vos statistiques générales"
            },
            subscribe: {
                short_description: "Abonnement premium"
            },
            counters: {
                short_description: "Gérer les compteurs du serveur"
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
                export_done: "**Graph succesfully exported !** You can open the `.csv` file with your favourite spreadsheet software.",
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
            },
            server_boosts: {
                title: "Boosts",
                description: "Graphique résumant le nombre de boosts.",
                graph_name: "Résumé du nombre de boosts"
            }
        }
    },
    top: {
        not_enough_data: "**Whoops!** I don't have enough data to make rankings for now.. *If the problem happens again, please report the bug on the support server.*",
        not_allowed_timerange: "**Whoops!** You can't choose a timerange longer than **{max}** days.",
        not_allowed_timestamp_low: "**Whoops!** Vous ne pouvez pas choisir un intervalle temporel d'une durée inférieure à **{max}** jour(s).",
        top_canvas_leaderboard_date: "Global rankings on {date}",
        top_canvas_leaderboard_temp_date: "{type} rankings from {date1} to {date2}",
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
            components_days_acronym: "d",
            error_premium_restricted: "**Whoops!** Calculer autant de données nous demande beaucoup de ressources. C'est pourquoi les classements temporaires sont limités aux **{max} derniers jours** pour les serveurs non-premium.."
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
                    },
                    meta: {
                        title: "Rangs",
                        description: "Evaluation notée de F à A+."
                    },
                    elements: {
                        "messages-voice": {
                            title: "Activity Ranks",
                            rank_titles: [
                                "Messages envoyés",
                                "Activité vocale"
                            ],
                            names: {
                                X: "Aucune donnée",
                                F: "Très peu actif",
                                "F+": "Très peu actif",
                                "D-": "Peu actif",
                                D: "Peu actif",
                                "D+": "Peu actif",
                                "C-": "Passivement Actif",
                                C: "Passivement Actif",
                                "C+": "Passivement Actif",
                                "B-": "Plutôt Actif",
                                B: "Plutôt Actif",
                                "B+": "Actif",
                                "A-": "Très Actif",
                                A: "Très Actif",
                                "A+": "Forte Activité"
                            }
                        }
                    }
                },
                firstPlaceMessages: {
                    title: "Progression #1",
                    text: "Progression pour devenir #1 du/serveur en terme de messages."
                },
                nextPlaceMessages: {
                    title: "Progression classement",
                    text: "Progression pour atteindre le/rang #{x} en messages."
                },
                graph: {
                    meta: {
                        title: "Graphique",
                        description: "Affiche un graphique."
                    },
                    elements: {
                        messages: {
                            title: "Messages envoyés",
                            description: "Graphique sur vos messages envoyés"
                        },
                        voice: {
                            title: "Temps en vocal",
                            description: "Graphique sur votre activité vocale"
                        },
                        reactionsGiven: {
                            title: "Réactions données",
                            description: "Graphique sur vos réactions données"
                        },
                        deletedMessages: {
                            title: "Messages supprimés",
                            description: "Graphique sur vos messages supprimés"
                        }
                    }
                },
                percentage: {
                    meta: {
                        title: "Pourcentage",
                        description: "Affiche un pourcentage + barre de progression."
                    },
                    elements: {
                        involvement: {
                            title: "Engagement",
                            text: "Taux de présence sur le serveur/au cours du mois dernier.",
                            description: "Présence en % sur ce serveur"
                        },
                        firstPlaceMessages: {
                            title: "Progression #1",
                            text: "Progression pour devenir #1 du/serveur en terme de messages.",
                            description: "Progression pour devenir #1 du serveur"
                        },
                        nextPlaceMessages: {
                            title: "Progression classement",
                            text: "Progression pour atteindre le/rang #{x} en messages.",
                            description: "Progression dans le classement"
                        }
                    }
                },
                timeranges: {
                    meta: {
                        title: "Statistiques temporelles",
                        description: "Affiche une données sous 3 plages temporelles."
                    },
                    elements: {
                        messages: {
                            title: "Messages envoyés",
                            description: "Statistiques sur vos messages envoyés."
                        },
                        voice: {
                            title: "Temps en vocal",
                            description: "Statistiques sur votre activité vocale."
                        },
                        reactionsGiven: {
                            title: "Réactions données",
                            description: "Statistiques sur vos réactions données."
                        },
                        deletedMessages: {
                            title: "Messages supprimés",
                            description: "Statistiques sur vos messages supprimés."
                        }
                    }
                },
                numeric: {
                    meta: {
                        title: "Valeur numérique",
                        description: "Affiche un nombre accompagné de texte."
                    },
                    elements: {
                        firstPlaceMessages: {
                            title: "Progression #1",
                            text: "Messages restants avant/d'atteindre le rang #1",
                            description: "Messages restants avant de devenir #1 du serveur"
                        },
                        nextPlaceMessages: {
                            title: "Progression classement",
                            text: "Messages restants avant/d'atteindre le rang #{x]",
                            description: "Messages avant le prochain rang du classement"
                        },
                        daysSinceAccJoin: {
                            title: "Jours depuis l'arrivée",
                            text: "Jours depuis votre/arrivée sur le serveur",
                            description: "Nombre de jours depuis votre arrivée sur ce serveur"
                        },
                        daysSinceAccCreation: {
                            title: "Jours depuis la création",
                            text: "Jours depuis la création/de votre compte",
                            description: "Nombre de jours depuis la création de votre compte"
                        }
                    }
                },
                correlogram: {
                    meta: {
                        title: "Corrélogramme",
                        description: "Affiche un corrélogramme."
                    },
                    elements: {
                        messages: {
                            title: "Messages envoyés",
                            description: "Intensité de l'activité en fonction de la date"
                        },
                        voice: {
                            title: "Activité vocale",
                            description: "Intensité de l'activité en fonction de la date"
                        },
                        reactionsGiven: {
                            title: "Réactions données",
                            description: "Intensité de l'activité en fonction de la date"
                        },
                        deletedMessages: {
                            title: "Messages supprimés",
                            description: "Intensité de l'activité en fonction de la date"
                        }
                    }
                }
            },
            global_stats_voice_minutes: "Minutes en vocal"
        },
        edit: {
            errors: {
                SELECTED_LOCKED_CONTENT: "**This statistic is locked !** To use it, you must purchase it ! *In order to do that, here's what you must do :*\n\n{emoji} **Login on the website :**\n> Check out our [website]({link}), login, then when hovering your avatar, click on *'Shop'* and finally, in the left sidebar, click on 'Shop /me'.\n\n{emoji} **Purchase the statistic :**\n> When in the shop /me, select the element `{type}`, then, during the next step, purchase the statistic `{content}` !",
                SELECTED_LOCKED_CONTENT_IMAGE: "https://i.imgur.com/o4LyrQt.png"
            },
            agreement_message: "**Important : ** before you edit your card's arrangement, you must accept we save your preferences on *all your servers*. This data will **not be deleted** if you leave this server or delete your account and will be **public**, hence why this message's important./If you **accept** the data collection and storage, press **'Accept'** below.",
            agreement_confirm_button: "Accept",
            agreement_reject_button: "Refuse",
            agreement_reject_message: "**We won't save your preferences.**\n> if you have more questions about how we manage your **data**, you can join our **Discord server**. *Otherwise, if you change your mind, you can type the command again !*",
            agreement_reject_easteregg_gif: "https://tenor.com/view/dujardin-jean-daccord-comme-ca-gif-10162502",
            main_embed_description: "**Edit** the arrangement of the statistic elements on your card. *Select an element in the dropdown menu to edit it!*",
            buttons_save: "Save",
            main_embed_fields_name: "Line {n} :",
            main_embed_select_displayed: "Displayed :",
            main_embed_select_placeholder: "Select an element",
            select_type_embed_description: "**Alright!**Select what kind of element you want to display in this location **#{n}**.",
            select_type_embed_cancelled: "**Time-out!** The element's selection has been cancelled.",
            select_content_description: "**Alright!** Select what type of statistic you wish to display in the `{name}` box.",
            select_content_menu_locked_description: "Select to purchase this statistic.",
            elements: {
                graph: {
                    title: "Graph",
                    description: "Displays a graph."
                },
                percentage: {
                    title: "Percentage",
                    description: "Displays a percentage + progression bar."
                },
                ranks: {
                    title: "Ranks",
                    description: "Evaluation from F to A+."
                },
                timeranges: {
                    title: "Time statistics",
                    description: "Displays a value in 3 time ranges."
                }
            }
        },
        dummy: {
            box_displayed: "Affiché :",
            card_sub_title: "Carte factice"
        }
    },
    botstats: {
        stat_type_select_placeholder: "Select a statistic",
        graph_init_at: "Statistic manager started {x} hours ago",
        stat_types: {
            commandCount: "Ran commands",
            interactionCount: "Received interactions",
            messageCount: "Registered messages",
            cachedGuildCount: "Cached servers",
            cachedGuildMemberCount: "Cached members",
            cachedWebsiteUsersCount: "Cached users",
            ramUsage: "RAM Usage",
            databaseConnections: "Database queries",
            newGuilds: "Nouveaux serveurs",
            refreshedCounters: "Compteurs mis à jour"
        },
        at_this_moment: "Cette heure-ci : {x}"
    },
    _FILE_UPDATES_INFO: {
        last_update_timestamp: 1652910788635,
        last_update_date: "18/05/2022",
        last_update_filegenerator_version: "1.0.1"
    },
    stats: {
        errors: {
            fetch_error: "**Whoops!** Impossible de récupérer les données nécessaires pour afficher les statistiques.. *Si le problème persiste, veuillez signaler le bogue sur le serveur support.*"
        },
        help_screen: {
            embed_title: "Afficher une statistique",
            embed_description: "**Représentez** vos statistiques ou celles du serveur. Commencez par choisir une **préconfiguration** :",
            image_title: "Statistiques",
            embed_field_server_stats: "Statistiques du serveur",
            embed_field_user_stats: "Vos statistiques",
            components_guild_stat_select_menu: "📊 Statistiques du serveur",
            components_user_stat_select_menu: "👤 Vos statistiques"
        },
        timerange_modal: {
            title: "Choisir un intervalle de temps",
            label: "Intervalle temporel (en jours) :",
            error_title: "Whoops !",
            error_not_number: "Vous n'avez pas entré un nombre valide.. *Exemple : `7`, `12`, `30`, etc.*",
            error_too_short: "L'intervalle temporel entré est trop court, *il doit être d'au moins `une semaine` !*",
            error_not_premium: "Pour accéder à vos statistiques au delà de `31` jours, vous devez être *premium*.",
            button_retry: "Réessayer"
        },
        stat_view: {
            general: {
                text_x_days: "{days} jours",
                last_x_days: "Ces derniers {days} jours"
            },
            graph: {
                infoboxes: {
                    per_day: "/j",
                    today_title: "Ces dernières 24 heures",
                    evolution_title: "Evolution",
                    average_title: "En moyenne",
                    max_title: "Valeur maximum",
                    min_title: "Valeur minimum"
                }
            }
        },
        stats_types: {
            server_messages: {
                title: "Messages envoyés",
                description: "Messages envoyés sur ce serveur.",
                view_name: "Activité par messages"
            },
            server_voicetime: {
                title: "Temps passé en vocal",
                description: "Activité vocale du serveur.",
                view_name: "Activité vocale"
            },
            server_members: {
                title: "Membres",
                description: "Nombre de membres sur ce serveur.",
                view_name: "Évolution du nombre de membres"
            },
            server_deleted: {
                title: "Messages supprimés",
                description: "Messages supprimés sur ce serveur.",
                view_name: "Messages supprimés"
            },
            server_reactions: {
                title: "Réactions",
                description: "Réactions aux messages du serveur.",
                view_name: "Réactions aux messages"
            },
            server_joined: {
                title: "Nouveaux membres",
                description: "Nouveaux membres sur ce serveur.",
                view_name: "Nouveaux arrivants"
            },
            server_left: {
                title: "Départs",
                description: "Membres ayant quittés ce serveur.",
                view_name: "Nombre de départs"
            },
            server_boosts: {
                title: "Boosts",
                description: "Boosts du serveur.",
                view_name: "Boosts du serveur"
            },
            user_myMessages: {
                title: "Messages envoyés",
                description: "Vos messages envoyés sur ce serveur.",
                view_name: "Activté par messages"
            },
            user_myVoicetime: {
                title: "Temps en vocal",
                description: "Votre temps passé en vocal.",
                view_name: "Activité vocale"
            },
            user_myDeletedMessages: {
                title: "Messages supprimés",
                description: "Vos messages supprimés.",
                view_name: "Messages supprimés"
            }
        }
    },
    lang: {
        select_screen: {
            components_lang_select_placeholder: "Sélectionner une langue",
            components_lang_select_no_options_title: "Aucune langue disponible",
            components_lang_select_no_options_description: "Aidez-nous à traduire le bot !",
            custom_display_title: "Langues",
            embed_description: "**Bonjour, hello, holà..** Sélectionnez la langue d'affichage du bot.",
            embed_field_available_languages: "Langues disponibles :",
            embed_field_help_translate_title: "Aider à traduire :",
            embed_field_help_translate_content: "Propulsez le projet en le traduisant dans votre langue ; plus d'informations sur notre [serveur Discord]({link}). Merci !"
        },
        updated_lang_screen: {
            no_available_languages: "**Aucune traduction disponible !** Je n'ai pas encore été traduit.. Mais si tu souhaites remédier à ce problème, rejoins-nous ici : {link} !",
            embed_description: "**Bonjour !** Vos préférences linguistiques ont été mises à jour.",
            embed_description_details: "La langue choisie sera affichée sur tous vos serveurs, et pour vous seul."
        }
    },
    subscribe: {
        subscribe_ad: {
            embed_description: "**Devenez premium !** Et profitez de nombreux avantages tout en supportant un petit projet indépendant =)",
            buy_button: "Souscrire",
            redeem_button: "Utiliser un code",
            redeem_code: {
                modal_title: "Utiliser un code",
                modal_field_code: "Saisissez le code :",
                proc_invalid_code: "**Whoops !** Le code entré est invalide. *Si vous pensez qu'il s'agit d'une erreur, contactez-nous !*",
                proc_expired_code: "**Whoops !** Le code entré est expiré depuis le {date}..",
                proc_easter_egg: "**Bien essayé**, malheureusement : non",
                proc_parse_error: "**Erreur :** Une erreur est survenue lors de la lecture des données associés au code.",
                proc_success: "**Merci,** votre code a été appliqué avec succès ! *L'abonnement premium de ce serveur expirera le {date}.*"
            },
            canvas: {
                title: "Passez à la vitesse suppérieure !",
                support_message: "..et supportez le projet !",
                infoboxes: {
                    premium_title: "Abonnement actif !",
                    premium_content: "Ce serveur est actuellement premium jusqu'au {date} (dans {days} jours). Merci !",
                    deleted_stats_title: "Conservez vos stats",
                    deleted_stats_content: "Annulez la suppression des statistiuques après 31 jours. Ce serveur perd jusqu'à {x} relevés chaque mois !",
                    broader_timeranges_title: "Plages temporelles",
                    broader_timeranges_content: "Visualisez vos stats sur plusieurs mois et années, sans être contraint à 31 jours !",
                    more_counters_title: "Plus de compteurs",
                    more_counters_content: "Affichez plus de stats dans les salons de votre serveur en devenant premium !"
                }
            }
        }
    },
    counters: {
        main_view: {
            buttons_create_counter: "Créer un compteur",
            buttons_edit_counter: "Modifier",
            buttons_delete_counter: "Supprimer",
            embed_description: "**Les compteurs** affichent des statistiques dans les noms et topics de vos salons.",
            embed_description_more_details: "*Plus d'infos et de détails sur notre [`documentation`]({link}) !*",
            embed_counters_title: "Compteurs actifs :",
            embed_no_counters: "*Aucun compteur..* Créez-en un !",
            embed_custom_display_title: "Compteurs",
            max_counters_premium: "**Whoops!** Vous avez atteint la limite de compteurs. Un abonnement **premium** vous permet de repousser la limite jusqu'à **{x}** compteurs !",
            max_counters_reached: "**Whoops!** Vous avez atteint la limite maximale de compteurs sur ce serveur."
        },
        counter_selection_view: {
            selection_menu_placeholder: "Sélectionner un compteur",
            selection_menu_option_title: "Compteur #{n}",
            selection_list_title: "Liste des compteurs: ",
            selection_custom_display_titles: {
                edit: "Modifier un compteur",
                delete: "Supprimer un compteur"
            },
            selection_descriptions: {
                edit: "**Choisissez** le compteur que vous souhaitez modifier.",
                delete: "**Choisissez** le compteur que vous souhaitez supprimer."
            }
        },
        edit_counter_view: {
            embed_description: "**Choisissez** le contenu de votre compteur. Les statistiques marquées d'un {emoji} sont réservées aux serveurs premium.",
            embed_description_example: "[members] 👥    ⇄  182 👥\n[messages] msgs  ⇄  9 854 msgs",
            select_counter_title: "Choisir un compteur pré-fait",
            buttons_custom: "Personnalisé",
            buttons_premium: "Devenir premium",
            default_counters: {
                members: "Membres : [members] 👥",
                voice: "En vocal : [voice] 👥",
                date: "📅 [date]",
                messages: "Messages : [messages] 💬",
                online: "En ligne : [online] 🟢",
                guildAge: "Âge du serveur : [guildAge]",
                inactive: "Inactifs : [inactive] 👥",
                inactiveChunk: "[inactive]/[members] inactifs ([inactiveChunk]%)",
                active: "Membres actifs : [active] 👥",
                boosts: "Boosts : [boosts]",
                boostlvl: "[boosts] boosts • lvl [boostlvl]"
            },
            categories: {
                BASIC: "Essentiel",
                STATS: "Statistiques",
                MISC: "Divers"
            }
        },
        editor_modal: {
            modal_title_new: "Nouveau compteur",
            modal_title_edit: "Modifier un compteur",
            counter_name: "Contenu du compteur :",
            available_stats: "Statistiques disponibles :"
        },
        editor_proc: {
            embed_error_premium: "**Whoops !** Ce compteur contient des statistiques réservées aux serveurs premium. *Réessayez en remplaçant les tags suivants : {tags}*",
            embed_error_outdated: "**Whoops !** Ce compteur contient des statistiques erronées. *Réessayez en remplaçant les tags suivants : {tags}*",
            embed_error_no_tags: "**Whoops !** Ce compteur ne contient aucune statistique valide. *Réessayez en utilisant des tags comme `[members]`, `[messages]`, etc..*",
            buttons_retry: "Réessayer",
            buttons_get_premium: "Devenir premium",
            error_database: "**Une erreur est survenue** lors de l'enregistrement des données.. Nous voilà dans de beaux draps : le compteur créé sera malheureusement supprimé au prochain redémarrage. Merci d'entrer en contact avec le serveur support :/"
        },
        data_tags: {
            members: "Nombre de membres",
            messages: "Nombre de messages",
            voice: "Nombre de membres en vocal",
            date: "Date du jour (DD/MM/YYYY)",
            guildAge: "Âge du serveur",
            online: "Membres en ligne",
            inactive: "Inactifs (aucun message depuis 30j)",
            inactiveChunk: "Pourcentage d'inactifs",
            active: "Membres actifs (30j)",
            boosts: "Nombre de boosts",
            boostlvl: "Niveau de boost"
        }
    }
}