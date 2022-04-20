/**
 * Ce fichier à été généré pour la dernière fois le 20/04/2022 à 18:53:29 par le script de génération de fichier langue.
 * Si celui-ci ne comporte pas les textes des dernières versions, pensez à le régénérer, ou demandez à qqn d'autre de le faire (sur le salon "traductions" du serveur Discord).
 *
 * @version 1.0.1 - Version du générateur
 * @language es-ES
 * @default fr-FR
 */

module.exports = {
    infos: {
        public: true,
        language_code: "es-ES",
        language_name: "Español",
        language_flag: "🇪🇸",
        default: false
    },
    general: {
        months_list: {
            "1": [
                "janvier"
            ],
            "2": [
                "février"
            ],
            "3": [
                "mars"
            ],
            "4": [
                "avril"
            ],
            "5": [
                "mai"
            ],
            "6": [
                "juin"
            ],
            "7": [
                "juillet"
            ],
            "8": [
                "août"
            ],
            "9": [
                "septembre"
            ],
            "10": [
                "octobre"
            ],
            "11": [
                "novembre"
            ],
            "12": [
                "décembre"
            ]
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
                " jour",
                " jours",
                "j"
            ],
            hours: [
                " heure",
                " heures",
                "h"
            ],
            minutes: [
                " minute",
                " minutes",
                " min"
            ],
            seconds: [
                " seconde",
                " secondes",
                "s"
            ],
            weeks: [
                " semaine",
                " semaines",
                " sem"
            ],
            months: [
                " mois",
                " mois",
                "m"
            ],
            years: [
                " an",
                " ans",
                "a"
            ]
        },
        errors: {
            bot_missing_permissions: "**Whoops!** Je n'ai pas les permissions suffisantes pour exécuter cette commande.\n> J'ai besoin de : {missingPermissions}",
            cmd_missing_permissions: "**Whoops!** Vous ne disposez pas des permissions nécessaires pour exécuter cette commande.\n> Il vous manque : {missingPermissions}"
        }
    },
    help: {
        help_screen: {
            title: "Page d'aide",
            description: "Merci d'utiliser **{projectName}** v.**{version}** ! *Vous pouvez consulter le dernier patch note en cliquant [**ici**]({lastPatchNoteLink}).*",
            fallback_message: "Cette catégorie est vide :(",
            buttons: {
                website: "Site web",
                support_server: "Serveur Support",
                invite_bot: "Inviter le bot"
            },
            categories: {
                STATS: "Commandes statistiques",
                SECONDARY_STATS: "Commandes secondaires",
                OTHER: "Autres commandes"
            }
        },
        commands: {
            graph: {
                short_description: "Générer un graphique"
            },
            top: {
                short_description: "Afficher les classements du serveur"
            },
            me: {
                short_description: "Afficher vos statistiques personnelles"
            },
            sync: {
                short_description: "Synchronisation statistique"
            },
            rawstats: {
                short_description: "Statut des modules et état du cache"
            },
            botstats: {
                short_description: "Statistiques et infos sur le bot"
            },
            lang: {
                short_description: "Change preferred language"
            },
            stats: {
                short_description: "Afficher vos statistiques générales"
            }
        }
    },
    graph: {
        errors: {
            fetch_error: "**Whoops!** Impossible de récupérer les données nécessaires pour établir un graphique.. *Si le problème persiste, veuillez signaler le bogue sur le serveur support.*"
        },
        help_screen: {
            embed_title: "Créer un graphique",
            embed_description: "**Représentez** vos statistiques ou celles du serveur sous forme de graphiques. Commencez par choisir une **préconfiguration** :",
            image_title: "Graphiques",
            embed_field_server_graph: "Graphiques du serveur",
            embed_field_user_graph: "Graphique de vos stats",
            components_guild_graph_select_menu: "📊 Graphique sur les stats du serveur",
            components_user_graph_select_menu: "👤 Graphique avec vos statistiques"
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
                export_button: "Exporter",
                export_done: "**Graphique exporté !** Vous pouvez ouvrir le fichier `.csv` avec votre logiciel de tableur préféré.",
                export_software_import_tip: "Lors de l'import, nous vous conseillons de suivre la **configuration recommandée** pour éviter les problèmes d'interprétation :",
                export_config: [
                    [
                        "Jeu de caractères",
                        "UTF-8 / Unicode (UTF-8)"
                    ],
                    [
                        "Séparateur de colonnes",
                        "Virgule (,)"
                    ],
                    [
                        "Séparateur de lignes",
                        "Retour à la ligne (\\n)"
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
            server_boosts: {
                title: "Boosts",
                description: "Graphique résumant le nombre de boosts.",
                graph_name: "Résumé du nombre de boosts"
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
    top: {
        not_enough_data: "**Whoops!** Je dispose de trop peu de données pour établir des classements pour le moment.. *Si le problème persiste, renseignez-vous auprès de notre serveur support.*",
        not_allowed_timerange: "**Whoops!** Vous ne pouvez pas choisir un intervalle temporel plus long que **{max}** jours.",
        not_allowed_timestamp_low: "**Whoops!** Vous ne pouvez pas choisir un intervalle temporel d'une durée inférieure à **{max}** jour(s).",
        top_canvas_leaderboard_date: "Classements globaux au {date}",
        top_canvas_leaderboard_temp_date: "Classements {type} du {date1} au {date2}",
        top_canvas_empty_username: "Personne",
        top_canvas_not_found_username: "Introuvable",
        top_canvas_leaderboard_temp_types: {
            "0": "complets",
            "5": "partiels",
            "10": "schématiques"
        },
        pos_abbreviations: {
            "1": "er",
            "2": "nd",
            "3": "rd",
            other: "e"
        },
        stat_units: {
            messages: [
                "Messages",
                "messages"
            ],
            voice: [
                "Heures en voc",
                "heures en voc"
            ]
        },
        ready_to_use_timeranges: {
            image_title: "Plages temporelles",
            embed_title: "Sélectionnez une plage temporelle",
            embed_description: "Sélectionnez un intervalle de temps sur laquelle établir les classements.",
            embed_data_FULL: "Données complètes",
            embed_data_PARTIAL_5: "Données partielles",
            embed_data_PARTIAL_10: "Données schématiques",
            embed_data_partial_disclamer: "Pour limiter la saturation du bot, certains classements sont **partiels** ou **schématiques**, les stats y sont inexactes mais suffisantes pour déterminer les rangs.",
            embed_data_learn_more: "En savoir plus",
            components_days_acronym: "j"
        }
    },
    me: {
        errors: {
            cannot_fetch_user: "**Whoops!** Impossible de récupérer les informations de cet utilisateur.. réessayez plus tard !",
            data_flag_fetch_error: "**Whoops!** Une erreur est survenue lors de la récupération des données pour le **DATA_FLAG** : `{flag}`."
        },
        card: {
            header_joined_at: "Rejoint le",
            header_created_at: "Créé le",
            global_stats_messages: "Messages envoyés",
            global_stats_voice: "Heures en vocal",
            global_stats_voice_minutes: "Minutes en vocal",
            global_stats_leaderboard: "Dans le classement",
            buttons_edit: "Modifier",
            units: {
                timeranges: [
                    "28j",
                    "7j",
                    "24h"
                ],
                messages: [
                    "message",
                    "messages"
                ],
                voice: [
                    "heure",
                    "heures"
                ],
                reactionsGiven: [
                    "réaction",
                    "réactions"
                ],
                deletedMessages: [
                    "message",
                    "messages"
                ]
            },
            elements: {
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
                },
                ranks: {
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
                }
            }
        },
        edit: {
            errors: {
                SELECTED_LOCKED_CONTENT: "**Cette statistique est bloquée !** Pour l'utiliser, vous devez l'acheter ! *Pour cela, voici quelques étapes :*\n\n{emoji} **Se connecter au site :**\n> Rendez-vous sur note **[site web]({link})**, puis cliquez sur `Se connecter`, et enfin, rendez-vous dans la **boutique**.\n\n{emoji} **Acheter la statistique :**\n> Une fois dans la boutique /me, sélectionnez l'élément **`{type}`**, puis, à l'étape suivante, achetez la statistique **`{content}`** !\n​",
                SELECTED_LOCKED_CONTENT_IMAGE: "https://i.imgur.com/o4LyrQt.png"
            },
            agreement_message: "**Important : ** avant de pouvoir modifier votre carte, vous devez accepter à ce que nous **enregistrions** vos préférences. Ces données seront publiques et ne seront **pas** automatiquement **supprimées**.",
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
            select_content_description: "**Très bien !** Choisissez quel type de statistique vous souhaiteriez afficher dans la boîte `{name}`."
        },
        dummy: {
            box_displayed: "Affiché :",
            card_sub_title: "Carte factice"
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
    _FILE_UPDATES_INFO: {
        last_update_timestamp: 1650473609044,
        last_update_date: "20/04/2022",
        last_update_filegenerator_version: "1.0.1"
    }
}