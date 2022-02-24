/**
 * Ce fichier à été généré pour la dernière fois le 24/02/2022 à 19:57:00 par le script de génération de fichier langue.
 * Si celui-ci ne comporte pas les textes des dernières versions, pensez à le régénérer, ou demandez à qqn d'autre de le faire (sur le salon "traductions" du serveur Discord).
 *
 * @version 1.0.0 - Version du générateur
 * @language de
 * @default fr
 */

module.exports = {
    infos: {
        public: true,
        language_code: "de",
        language_name: "Allemand",
        language_flag: "🇩🇪",
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
        not_enough_data: "**Whoops!** Je dispose de trop peu de données pour établir des classements pour le moment.. *Si le problème persiste, renseignez-vous auprès de notre serveur support.*",
        not_allowed_timerange: "**Whoops!** Vous ne pouvez pas choisir un intervalle temporel plus long que **{max}** jours.",
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
                messages: {
                    title: "Messages envoyés"
                },
                voice: {
                    title: "Temps en vocal"
                },
                reactionsGiven: {
                    title: "Réactions données"
                },
                involvement: {
                    title: "Engagement",
                    text: "Taux de présence sur le serveur/au cours du mois dernier."
                },
                deletedMessages: {
                    title: "Messages supprimés"
                },
                ranks: {
                    "messages-voice": {
                        title: "Activity Ranks",
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
        last_update_timestamp: 1645729020884,
        last_update_date: "24/02/2022",
        last_update_filegenerator_version: "1.0.0"
    }
}